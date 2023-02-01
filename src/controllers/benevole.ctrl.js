const Benevole = require('../models/benevole.model');


// Path : api/benevoles
// POST
// Create a new Benevole
exports.createBenevole = function(req, res){
    const benevole = new Benevole({
        lastname : req.body.lastname,
        firstname : req.body.firstname,
        email : req.body.email
    });
    benevole.save()
        .then(() => res.status(201).json({message : 'Bénévole créé !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}



exports.updateBenevole = function(req, res){
    Benevole.updateOne({_id : req.params.id}, {...req.body, _id : req.params.id})
        .then(() => res.status(200).json({message : 'Bénévole mis à jour'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


exports.deleteBenevole = function(req, res){
    Benevole.deleteOne({_id : req.params.id})
        .then(() => res.status(200).json({message : 'Bénévole supprimé'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        }
    );
}

exports.getOneBenevole = function(req, res){
    Benevole.findOne({_id : req.params.id})
        .then(benevole => res.status(200).json(benevole))
        .catch(error => {
            console.log(error);
            res.status(404).json({error});
        });
}


exports.getAllBenevoles = function(req, res){
    Benevole.find()
        .then(benevoles => res.status(200).json(benevoles))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}