const Zone = require('../models/zone.model');


exports.getALlZones = function(req, res){
    Zone.find()
        .then(zones => res.status(200).json(zones))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}


exports.getZoneById = function(req, res){
    Zone.findOne({_id : req.params.id})
        .then(zone => res.status(200).json(zone))
        .catch(error => {
            console.log(error);
            res.status(404).json({error});
        });
}


exports.createZone = function(req, res){
    console.log(req.body)
    Zone.create({name : req.body.name})
        .then(() => res.status(201).json({message : 'Zone créée !'}))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}