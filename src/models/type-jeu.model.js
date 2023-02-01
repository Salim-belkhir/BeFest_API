const mongoose = require('mongoose');

const schemaTypeJeu = mongoose.Schema({
    name : {
        type: String,
        required : true,
        lowercase : true,
        unique : true
    }
});


module.exports = mongoose.model('TypeJeu', schemaTypeJeu);