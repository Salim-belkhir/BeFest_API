const mongoose = require('mongoose');


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
            ref : 'Benevole',
            required : true
        }],
        required : true
    }
});


module.exports = mongoose.model('Creneau', schemaCreneau);