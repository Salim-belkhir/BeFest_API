const TypeJeu = require('../models/type-jeu.model');

// Get all the TypeJeux that exist in the database
exports.getAllTypeJeu = function(req, res){
    TypeJeu.find()
        .then(typeJeux => res.status(200).json(typeJeux))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Get a TypeJeu by its id
exports.getTypeJeuById = function(req, res){
    TypeJeu.findOne({_id : req.params.id})
        .then(typeJeu => res.status(200).json(typeJeu))
        .catch(error => {
            console.log(error);
            res.status(404).json({error});
        });
}


// Create a new TypeJeu
exports.createTypeJeu = function(req, res){
    TypeJeu.create({name : req.body.name})
        .then(() => res.status(201).json({message : 'TypeJeu créé !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}
