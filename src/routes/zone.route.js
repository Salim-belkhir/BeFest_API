const express = require('express');
const router = express.Router();
const zoneCtrl = require('../controllers/zone.ctrl');


router.get('', zoneCtrl.getAllZones);


router.get(':id', zoneCtrl.getZoneById);

router.post('', zoneCtrl.createZone);


module.exports = router;