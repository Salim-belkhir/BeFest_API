const express = require('express');
const router = express.Router();
const BenevoleCtrl = require('../controllers/benevole.ctrl');


router.get('/', function(req, res){
    BenevoleCtrl.getAllBenevoles(req, res);
});


router.get('/:id', function(req, res){
    BenevoleCtrl.getBenevoleById(req, res);
});


router.post('/', function(req, res){
    BenevoleCtrl.createBenevole(req, res);
});


router.put('/:id', function(req, res){
    BenevoleCtrl.updateBenevole(req, res);
});

router.delete('/:id', function(req, res){
    BenevoleCtrl.deleteBenevole(req, res);
});


module.exports = router;