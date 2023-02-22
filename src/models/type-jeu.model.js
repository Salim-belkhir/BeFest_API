const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *  schemas:
 *      TypeJeu:
 *          type: object
 *          required:
 *              - id
 *              - name
 *          properties:
 *              id:
 *                  type: string
 *                  description: L'id du type de jeu.
 *              name:
 *                  type: string
 *                  description: Le nom du type de jeu.
 *          example:
 *              id: 5f9f5b5b9b9b9b9b9b9b9b9b
 *              name: jeu de société
 */


const schemaTypeJeu = mongoose.Schema({
    name : {
        type: String,
        required : true,
        lowercase : true,
        unique : true
    }
});


module.exports = mongoose.model('TypeJeu', schemaTypeJeu);