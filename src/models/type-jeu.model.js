const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *  schemas:
 *      TypeJeu:
 *          type: object
 *          required:
 *              - _id
 *              - name
 *          properties:
 *              _id:
 *                  type: string
 *                  description: L'id du type de jeu.
 *              name:
 *                  type: string
 *                  description: Le nom du type de jeu.
 *          example:
 *              _id: 5f9f5b5b9b9b9b9b9b9b9b9b
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