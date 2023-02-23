var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/auth.ctrl');
var verifySignup = require('../middlewares/verifySignup');


/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *      summary: Allows to a new user to sign up and so create an account.
 *      security: []
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *      responses:
 *              201:
 *                  description: Succès.
 *              400:
 *                  description: Erreur dans la requête.
 *              500:
 *                  description: Erreur serveur.
 */
// Here we use the middleware verifySignup to check if the email is already used and if the role is correct
router.post('/signup', [verifySignup.checkDuplicateEmail, verifySignup.checkRolesExisted], authCtrl.signup);

/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *     summary: Allows to a user to sign in and so connect to his account.
 *     security: []
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *               type: object
 *               properties:
 *                email:
 *                  type: string
 *                  description: The email of the user.
 *                password:
 *                  type: string
 *                  description: The password of the user.
 *     responses:
 *              200:
 *                  description: Succès.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              400:
 *                  description: Erreur dans la requête.
 *              500:
 *                  description: Erreur serveur.
 */
router.post('/signin', authCtrl.signin);

/**
 * @swagger
 * /api/auth/signout:
 *  post:
*     summary: Allows to a user to sign out and so disconnect from his account.
*     security: []
*     tags: [Auth]
*     responses:
*       200:
*           description: Succès.
*       400:
*           description: Erreur dans la requête.
*       500:
*           description: Erreur serveur.
 */
router.post('/signout', authCtrl.signout);



module.exports = router;