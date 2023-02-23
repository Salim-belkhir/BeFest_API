const User = require('../models/user.model');



exports.getInfosUser = (req,res) => {
    const id = req.params.id;
    if(id !== req.userId) {
        return res.status(401).json({
            message : "Unauthorized, it's not your account"
        });
    }
    User.findOne({_id : req.userId})
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(500).json({
            message : err.message
        });
    });
}



exports.updateUser = (req,res) => {
    const id = req.params.id;
    delete req.body._id;
    if(id !== req.userId) {
        return res.status(401).json({
            message : "Unauthorized, it's not your account"
        });
    }
    User.updateOne({_id : req.userId}, req.body)
    .then(() => {
        res.status(200).json("Utilisateur modifié !");  
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message : error.message
        });
    });
}
