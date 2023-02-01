const mongoose = require('mongoose');

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