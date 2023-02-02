const express = require('express');
const router = express.Router();
const TypeJeuCtrl = require('../controllers/type-jeu.ctrl');


// Path : api/type-jeux
// Get all TypeJeux
router.get('/', TypeJeuCtrl.getAllTypeJeu);


module.exports = router;