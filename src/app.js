// We get the modules we need
const database = require('./configs/database');
const express = require('express');
const benevoleRoute = require('./routes/benevole.route');
const typeJeuRoute = require('./routes/type-jeu.route');
const zoneRoute = require('./routes/zone.route');


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


app.use(express.json());
app.use("/api/benevoles", benevoleRoute);
app.use("/api/type-jeux", typeJeuRoute);
app.use("/api/zones", zoneRoute);


// We export the app to be used in the server.js file
module.exports = app;