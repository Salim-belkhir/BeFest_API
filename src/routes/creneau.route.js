const express = require('express');
const router = express.Router();
const creneauCtrl = require('../controllers/creneau.ctrl');
const auth = require('../middlewares/auth');


// Path : api/creneaux
// Get all Creneaux
router.get('', auth.verifyToken, creneauCtrl.getAllCreneaux);

// Path : api/creneaux/:id
// Get a Creneau by its id
router.get('/:id', creneauCtrl.getCreneauById);


// Path : api/creneaux/
// Create a new Creneau
router.post('', creneauCtrl.createCreneau);


// Path : api/creneaux/:id
// Update a Creneau
router.put('/:id', creneauCtrl.updateCreneau);


// Path : api/creneaux/:id
// Delete a Creneau
router.delete('/:id', creneauCtrl.deleteCreneau);


module.exports = router;