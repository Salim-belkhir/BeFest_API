// We get the modules we need
const database = require('./configs/database');
const express = require('express');


var app = express();

// We connect to the database
database.getConnection();


// We set the headers to allow the requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// We export the app to be used in the server.js file
module.exports = app;