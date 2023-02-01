const mongoose = require('mongoose');
const Jeu = require('./jeu.model');


const schemaZone = mongoose.Schema({
    name : {
        type: String,
        required : true,
        lowercase : true,
        unique : true,
        minlength : 2,
        maxlength : 50
    },
    jeux : [{
        type : Jeu.schema,
        required : false,
        default : []
    }]
});


module.exports = mongoose.model('Zone', schemaZone);