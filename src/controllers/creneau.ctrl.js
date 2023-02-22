const Creneau = require('../models/creneau.model');



// Get all Creneaux
exports.getAllCreneaux = function(req, res){
    Creneau.find().populate('zone').populate('benevoles')
        .then(creneaux => res.status(200).json(creneaux))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Get a Creneau by its id
exports.getCreneauById = function(req, res){
    Creneau.findById(req.params.id).populate('zone').populate('benevoles')
        .then(creneau => res.status(200).json(creneau))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Create a new Creneau
exports.createCreneau = function(req, res){
    Creneau.create({
        date : req.body.date,
        heureDebut : req.body.heureDebut,
        heureFin : req.body.heureFin,
        zone : req.body.zone,
        benevoles : req.body.benevoles
    })
        .then(() => res.status(201).json({message : 'Créneau créé !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        }
    );
}


// Update a Creneau
exports.updateCreneau = function(req, res){
    delete req.body._id;
    Creneau.updateOne({_id : req.params.id}, {...req.body, _id : req.params.id})
        .then(() => res.status(200).json({message : 'Créneau modifié !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Delete a Creneau
exports.deleteCreneau = function(req, res){
    Creneau.deleteOne({_id : req.params.id})
        .then(() => res.status(200).json({message : 'Créneau supprimé !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}