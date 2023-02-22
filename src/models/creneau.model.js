const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *    schemas:
 *     Creneau:
 *      type: object
 *      required:
 *          - id
 *          - date
 *          - heureDebut
 *          - heureFin
 *          - zone
 *          - benevoles
 *      properties:
 *          id:
 *             type: string
 *             description: L'id du créneau.
 *          date:
 *             type: string
 *             description: La date du créneau.
 *          heureDebut:
 *             type: string
 *             description: L'heure de début du créneau.
 *          heureFin:
 *             type: string
 *             description: L'heure de fin du créneau.
 *          zone:
 *             type: string
 *             description: L'id de la zone du créneau.
 *          benevoles:
 *              type: array
 *              description: Les id des bénévoles du créneau.
 *      example:
 *          id: 5f9f5b5b9b9b9b9b9b9b9b9b
 *          date: 2020-10-31
 *          heureDebut: 10:00
 *          heureFin: 12:00
 *          zone: 5f9f5b5b9b9b9b9b9b9b9b9b
 *          benevoles: [5f9f5b5b9b9b9b9b9b9b9b9b, 5f9f5b5b9b9b9b9b9b9b9b9b]
 * 
 */
const schemaCreneau = mongoose.Schema({
    date : {
        type: Date,
        required : true
    },
    heureDebut : {
        type: String,
        required : true
    },
    heureFin : {
        type: String,
        required : true
    },
    zone : {
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'Zone',
        required : true
    },
    benevoles : {
        type: [{
            type : mongoose.SchemaTypes.ObjectId,
            ref : 'User',
            required : true
        }],
        required : true
    }
});


module.exports = mongoose.model('Creneau', schemaCreneau);