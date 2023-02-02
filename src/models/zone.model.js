const mongoose = require('mongoose');


const schemaZone = mongoose.Schema({
    name : {
        type: String,
        required : true,
        lowercase : true,
        minlength : 2,
        maxlength : 50
    },
    jeux : {
        type: [{
            type : mongoose.SchemaTypes.ObjectId,
            ref : 'Jeu'
        }],
        default : []
    }
});


module.exports = mongoose.model('Zone', schemaZone);