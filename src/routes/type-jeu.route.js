const express = require('express');
const router = express.Router();
const TypeJeuCtrl = require('../controllers/type-jeu.ctrl');


// Path : api/type-jeux
// Get all TypeJeux
router.get('/', TypeJeuCtrl.getAllTypeJeu);


// Path : api/type-jeux/:id
// Get a TypeJeu by its id
router.get('/:id', TypeJeuCtrl.getTypeJeuById);


// Path : api/type-jeux/
// Create a new TypeJeu
router.post('/', TypeJeuCtrl.createTypeJeu);


module.exports = router;