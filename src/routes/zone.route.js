const express = require('express');
const router = express.Router();
const zoneCtrl = require('../controllers/zone.ctrl');


// Path : api/zone
// Get all Zones
router.get('', zoneCtrl.getAllZones);


// Path : api/zone/:id
// Get a Zone by its id
router.get('/:id', zoneCtrl.getZoneById);


// Path : api/zone/:id/jeux
// Get all jeux of a zone
router.get('/:id/jeux', zoneCtrl.getJeuxByZoneId);


// Path : api/zone/:id
// Create a new Zone
router.post('', zoneCtrl.createZone);


// Path : api/zone/:id
// Update a Zone
router.put('/:id', zoneCtrl.updateZone);


// Path : api/zone/:id
// Delete a Zone
router.delete('/:id', zoneCtrl.deleteZone);


module.exports = router;