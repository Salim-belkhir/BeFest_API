// We get the modules we need
const database = require('./configs/database');
const express = require('express');
var cookieSession = require('cookie-session');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const benevoleRoute = require('./routes/benevole.route');
const typeJeuRoute = require('./routes/type-jeu.route');
const zoneRoute = require('./routes/zone.route');
const jeuRoute = require('./routes/jeu.route');
const creneauRoute = require('./routes/creneau.route');
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');


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

// We parse the body of the requests
app.use(express.json());

// We set the cookie session
app.use(cookieSession({
    name: "befest-session",
    secret: "COOKIE_SECRET", 
    httpOnly: true
  }))

// We set the routes

/**
 * @swagger
 * tags:
 *    - name: Auth
 *      description: The auth managing API
 *    - name: User
 *      description: The user managing API
 *    - name: Benevole
 *      description: The benevole managing API
 *    - name: TypeJeu
 *      description: The typeJeu managing API
 *    - name: Zone
 *      description: The zone managing API
 *    - name: Jeu
 *      description: The jeu managing API
 *    - name: Creneau
 *      description: The creneau managing API
 */

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute)
app.use("/api/benevoles", benevoleRoute);
app.use("/api/type-jeux", typeJeuRoute);
app.use("/api/zones", zoneRoute);
app.use("/api/jeux", jeuRoute);
app.use("/api/creneaux", creneauRoute);


/**
 * @swagger
 * components:
 *  securitySchemes:
 *     ApiKeyAuth:
 *        type: apiKey
 *        in: header
 *        name: Authorization
 */





// We set the swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BeFest API",
      version: "1.0.0",
      description:
        "Welcome, \n this is an API for the BeFest project, a scholar project for the Polytech Montpellier. Made by Salim & Ayoub",
    },
    servers: [
      {
        url: "http://localhost:8000/",
        description: "Development server",
      },
      {
        url: "https://befest-api-1.onrender.com/",
        description: "Production server",
      }
    ],
  },
  apis: ["src/routes/*.route.js", "src/models/*.model.js", "src/app.js"],
};

const specs = swaggerJsdoc(options);

app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);



// We export the app to be used in the server.js file
module.exports = app;