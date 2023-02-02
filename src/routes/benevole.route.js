const express = require('express');
const router = express.Router();
const BenevoleCtrl = require('../controllers/benevole.ctrl');


// Path : api/benevoles
// Get all Benevoles
router.get('/', BenevoleCtrl.getAllBenevoles);

// Path : api/benevoles/:id
// Get a Benevole by its id
router.get('/:id', BenevoleCtrl.getBenevoleById);

// Path : api/benevoles
// Create a new Benevole
router.post('/', BenevoleCtrl.createBenevole);

// Path : api/benevoles/:id
// Update a Benevole
router.put('/:id', BenevoleCtrl.updateBenevole);

// Path : api/benevoles/:id
// Delete a Benevole
router.delete('/:id', BenevoleCtrl.deleteBenevole);


module.exports = router;