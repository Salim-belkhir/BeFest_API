const TypeJeu = require('../models/type-jeu.model');

// Get all the TypeJeux that exist in the database
exports.getAllTypeJeu = function(req, res){
    TypeJeu.find()
        .then(typeJeux => res.status(200).json(typeJeux))
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}