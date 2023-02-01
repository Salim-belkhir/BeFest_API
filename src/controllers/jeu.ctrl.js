const Jeu = require('../models/jeu.model');
const TypeJeu = require('../models/type-jeu.model');



// Path : api/jeux
// POST
// Create a new Jeu
exports.createJeu = function(req, res){
    TypeJeu.findOne({name : req.body.type.toLowerCase()})
        .then(typeJeu => {
            if(typeJeu){
                const jeu = new Jeu({
                    name : req.body.name,
                    type : typeJeu.name
                });
                jeu.save()
                    .then(() => res.status(201).json({message : 'Jeu créé !'}))
                    .catch(error => {
                        console.log(error);
                        res.status(400).json({error});
                    });

            }
            else{
                res.status(400).json({message : 'Type de jeu inexistant'});
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({error});
        });
}

