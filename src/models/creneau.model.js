const mongoose = require('mongoose');
const Zone = require('./zone.model');


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
        type: Zone,
        required : true
    },
    benevoles : { 
        type: [Benevole],
        required : true
    }   
});


module.exports = mongoose.model('Creneau', schemaCreneau);