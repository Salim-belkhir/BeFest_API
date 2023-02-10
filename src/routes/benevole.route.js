const express = require('express');
const router = express.Router();
const BenevoleCtrl = require('../controllers/benevole.ctrl');
const auth = require('../middlewares/auth');


// Path : api/benevoles
// Get all Benevoles
router.get('/', auth.verifyToken, auth.isAdmin, BenevoleCtrl.getAllBenevoles);

// Path : api/benevoles/:id
// Get a Benevole by its id
router.get('/:id',auth.verifyToken, auth.isAdmin,BenevoleCtrl.getBenevoleById);

// Path : api/benevoles
// Create a new Benevole
//router.post('/', BenevoleCtrl.createBenevole);

// Path : api/benevoles/:id
// Update a Benevole
router.put('/:id', auth.verifyToken, auth.isAdmin ,BenevoleCtrl.updateBenevole);

// Path : api/benevoles/:id
// Delete a Benevole
router.delete('/:id', auth.verifyToken, auth.isAdmin,BenevoleCtrl.deleteBenevole);


module.exports = router;