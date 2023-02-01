const mongoose = require('mongoose');

const schemaBenevole = mongoose.Schema({
    lastname : {
        type: String,
        required : true,
        lowercase : true
    },
    firstname : {
        type: String,
        required : true,
        lowercase : true
    },
    email : {
        type: String,
        required : true,
        lowercase : true,
        unique : true
    }
});

module.exports = mongoose.model('Benevole', schemaBenevole);