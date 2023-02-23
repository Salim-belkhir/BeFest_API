const config = require("../configs/auth.config");
const db = require("../models");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");


exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then( hash => {
        User.create({
            lastname : req.body.lastname,
            firstname : req.body.firstname,
            email : req.body.email,
            password : hash,
            role: req.body.role
        })
        .then(() => res.status(201).send("Utilisateur inscrit"))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
    })
    .catch(error => res.status(500).json({error}));
};

exports.signin = (req, res) => {
  User.findOne({email: req.body.email}).populate("role")
    .then(user => {
        if (!user) {
            return res.status(401).json({message : "Mot de passe/login faux"});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(!valid){
                return res.status(401).send("Mot de passe erroné");
            }

            var token = jwt.sign(
                    {userId : user._id }, config.secret,
                    { expiresIn: '24h' }
            );

            req.session.token = token;
            

            res.status(200).json({
                _id : user._id,
                firstname : user.firstname,
                lastname : user.lastname,
                email : user.email,
                role : user.role.name
            })
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};


exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};