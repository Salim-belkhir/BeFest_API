const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *  schemas:
 *     Jeu:
 *      type: object
 *      required:
 *        - id
 *        - name
 *        - type
 *      properties:
 *        id:
 *          type: string
 *          description: L'id du jeu.
 *        name:
 *          type: string
 *          description: Le nom du jeu.
 *        type:
 *          type: string
 *          description: Le type du jeu, il doit faire partie des jeux existants.
 *      example:
 *          id: 5f9f5b5b9b9b9b9b9b9b9b9b
 *          name: jeu1
 *          type: jeu de société
 */


const schemaJeu = mongoose.Schema({
    name : {
        type: String,
        required : true,
        lowercase : true
    },
    type : {
        type: String,
        required : true,
        lowercase : true
    }
});


module.exports = mongoose.model('Jeu', schemaJeu);