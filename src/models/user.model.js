const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - _id
 *              - lastname
 *              - firstname
 *              - email
 *              - password
 *              - role
 *          properties:
 *              _id:
 *                  type: string
 *                  description: L'id de l'utilisateur.
 *              lastname:
 *                  type: string
 *                  description: Le nom de l'utilisateur.
 *              firstname:
 *                  type: string
 *                  description: Le prénom de l'utilisateur.
 *              email:
 *                  type: string
 *                  description: L'email de l'utilisateur.
 *              password:
 *                  type: string
 *                  description: Le mot de passe de l'utilisateur.
 *              role:
 *                  type: string
 *                  description: Le rôle de l'utilisateur.
 *          example:
 *              _id: 5f9f5b5b9b9b9b9b9b9b9b9b
 *              lastname: Last
 *              firstname: Louis
 *              email: louis@gmail.com
 *              password: password1
 *              role: benevole
 */         



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