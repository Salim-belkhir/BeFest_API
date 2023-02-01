const express = require('express');
const router = express.Router();
const jeuCtrl = require('../controllers/jeu.controller');

// Path : api/jeux
// Get all Jeux
router.get('/', function(req, res){
    jeuCtrl.getAllJeux(req, res);
});

// Path : api/jeux/:id
// Get a Jeu by its id
router.get('/:id', function(req, res){
    jeuCtrl.getJeuById(req, res);
});

// Path : api/jeux/type-jeux/:name
// Get all Jeux by their type
router.get('/:name', function(req, res){
    jeuCtrl.getJeuxByType(req, res);
});

// Path : api/jeux/:id
// Create a new Jeu
router.post('/', function(req, res){
    jeuCtrl.createJeu(req, res);
});


// Path : api/jeux/:id
// Update a Jeu
router.put('/:id', function(req, res){
    jeuCtrl.updateJeu(req, res);
});

// Path : api/jeux/:id
// Delete a Jeu
router.delete('/:id', function(req, res){
    jeuCtrl.deleteJeu(req, res);
});


module.exports = router;