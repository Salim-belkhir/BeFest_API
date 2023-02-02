const Zone = require('../models/zone.model');

// Get all Zones
exports.getAllZones = function(req, res){
    console.log('getAllZones');
    Zone.find().populate('jeux')
        .then(zones => {
            res.status(200).json(zones);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}

// Get a Zone by its id
exports.getZoneById = function(req, res){
    Zone.findOne({_id : req.params.id}).populate('jeux')
        .then(zone => res.status(200).json(zone))
        .catch(error => {
            console.log(error);
            res.status(404).json({error});
        });
}


// Create a new Zone
exports.createZone = function(req, res){
    Zone.create({name : req.body.name, jeux : req.body.jeux})
        .then(() => res.status(201).json({message : 'Zone créée !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Update a Zone with a new name or new jeux
exports.updateZone = function(req, res){
    Zone.updateOne({_id : req.params.id}, {...req.body, _id : req.params.id})
        .then(() => res.status(200).json({message : 'Zone modifiée !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Get all jeux of a zone
exports.getJeuxByZoneId = function(req, res){
    Zone.findOne({_id : req.params.id}).populate('jeux')
        .then(zone => res.status(200).json(zone.jeux))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


// Delete a Zone
exports.deleteZone = function(req, res){
    Zone.deleteOne({_id : req.params.id})
        .then(() => res.status(200).json({message : 'Zone supprimée !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}