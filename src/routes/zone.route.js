const express = require('express');
const router = express.Router();
const zoneCtrl = require('../controllers/zone.ctrl');


router.get('/', function(req, res){
    zoneCtrl.getAllZones(req, res);
});


router.get('/:id', function(req, res){
    zoneCtrl.getZoneById(req, res);
});

router.post('/', function(req, res){
    zoneCtrl.createZone(req, res);
});



module.exports = router;