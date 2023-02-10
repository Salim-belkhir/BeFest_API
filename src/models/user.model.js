const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({
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
    },
    password : {
        type: String,
        required : true
    },
    role : {
        type: String,
        required : true,
        lowercase : true
    }
});

module.exports = mongoose.model('User', schemaUser);