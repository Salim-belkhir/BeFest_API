const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *   schemas:
 *    Zone:
 *      type: object
 *      required:
 *         - _id
 *         - name
 *         - jeux
 *      properties:
 *        _id:
 *          type: string
 *          description: L'id de la zone.
 *        name:
 *          type: string
 *          description: Le nom de la zone.
 *        jeux:
 *          type: array
 *          description: Les id des jeux de la zone.
 *      example:
 *       _id: 5f9f5b5b9b9b9b9b9b9b9b9b
 *       name: zone1
 *       jeux: [5f9f5b5b9b9b9b9b9b9b9b9b, 5f9f5b5b9b9b9b9b9b9b9b9b]
 *
 */

const schemaZone = mongoose.Schema({
    name : {
        type: String,
        required : true,
        lowercase : true,
        minlength : 2,
        maxlength : 50
    },
    jeux : [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Jeu'
    }]
});


module.exports = mongoose.model('Zone', schemaZone);