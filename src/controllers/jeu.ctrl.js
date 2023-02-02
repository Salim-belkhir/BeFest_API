const Jeu = require('../models/jeu.model');
const TypeJeu = require('../models/type-jeu.model');
const Zone = require('../models/zone.model');



// Path : api/jeux
// POST
// Create a new Jeu
exports.createJeu = function(req, res){
    TypeJeu.findOne({name : req.body.type.toLowerCase()})
        .then(typeJeu => {
            if(typeJeu){
                Jeu.create({name : req.body.name, type : req.body.type})
                    .then(() => res.status(201).json({message : 'Jeu créé !'}))
                    .catch(error => {
                        console.log(error);
                        res.status(400).json({error});
                    });

            }
            else{
                res.status(400).json({message : 'Type de jeu inexistant'});
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}



// Get all the Jeux about a specific type
exports.getJeuxByType = function(req, res){
    Jeu.find({type : req.params.name.toLowerCase()})
        .then(jeux => res.status(200).json(jeux))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Get all Jeux that exist in the database
exports.getAllJeux = function(req, res){
    Jeu.find()
        .then(jeux => res.status(200).json(jeux))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Get a Jeu by its id
exports.getJeuById = function(req, res){
    Jeu.findById(req.params.id)
        .then(jeu => res.status(200).json(jeu))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Update a Jeu by its id
// Before update, we check if the new type of jeu exists
exports.updateJeu = function(req, res){
    TypeJeu.find({name : req.body.type.toLowerCase()})
        .then(typeJeu => {
            if(typeJeu){
                Jeu.updateOne({_id : req.params.id}, {name : req.body.name, type : req.body.type})
                    .then(() => res.status(200).json({message : 'Jeu modifié !'}))
                    .catch(error => {
                        console.log(error);
                        res.status(400).json({error});
                    });
            }
            else{
                res.status(400).json({message : 'Le nouveau type de jeu est inexistant'});
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}



// Delete a Jeu by its id
exports.deleteJeu = function(req, res){
    Jeu.deleteOne({_id : req.params.id})
        .then(() => res.status(200).json({message : 'Jeu supprimé !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}



exports.getJeuxByZoneId = function(req, res){
    Zone.findOne({_id : req.params.id})
        .then(zone => {
            res.status(200).json(zone.jeux);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        }
    );  
}