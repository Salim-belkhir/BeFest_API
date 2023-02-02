const express = require('express');
const router = express.Router();
const jeuCtrl = require('../controllers/jeu.ctrl');


// Path : api/jeux
// Get all Jeux
router.get('/', jeuCtrl.getAllJeux);

// Path : api/jeux/:id
// Get a Jeu by its id
router.get('/:id', jeuCtrl.getJeuById);

// Path : api/jeux/type-jeux/:name
// Get all Jeux by their type
router.get('/:name', jeuCtrl.getJeuxByType);

// Path : api/jeux/:id
// Create a new Jeu
router.post('/', jeuCtrl.createJeu);


// Path : api/jeux/:id
// Update a Jeu
router.put('/:id', jeuCtrl.updateJeu);

// Path : api/jeux/:id
// Delete a Jeu
router.delete('/:id', jeuCtrl.deleteJeu);


module.exports = router;