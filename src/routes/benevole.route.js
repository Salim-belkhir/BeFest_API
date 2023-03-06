const express = require('express');
const router = express.Router();
const BenevoleCtrl = require('../controllers/benevole.ctrl');
const auth = require('../middlewares/auth');


/**
 * @swagger
 * /api/benevoles:
 *  get:
 *      summary: Get all the benevoles that exists. Need to be an admin.
 *      tags: [Benevole]
 *      security:
 *          - ApiKeyAuth: [admin]
 *      description: This route allows to get all the benevoles of the API.
 *      responses:
 *          200:
 *              description: Success.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          400:
 *              description: Bad request.
 */
//router.get('/', auth.verifyToken, auth.isAdmin, BenevoleCtrl.getAllBenevoles);
router.get('/', BenevoleCtrl.getAllBenevoles);

/**
 * @swagger
 * /api/benevoles/{id}:
 *  get:
 *      summary: Get a benevole by its id. Need to be an admin.
 *      tags: [Benevole]
 *      security:
 *          - ApiKeyAuth    : [admin]
 *      description: This route allows to get a benevole by its id.
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                  type: string
 *            required: true
 *            description: The benevole id
 *      responses:
 *          200:
 *              description: Success.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: Ressource not found.
 */
//router.get('/:id',auth.verifyToken, auth.isAdmin,BenevoleCtrl.getBenevoleById);
router.get('/:id',BenevoleCtrl.getBenevoleById);

// Path : api/benevoles
// Create a new Benevole
//router.post('/', BenevoleCtrl.createBenevole);

/**
 * @swagger
 * /api/benevoles:
 *  put:
 *      summary: Update the informations of a benevole. Need to be an admin.
 *      tags: [Benevole]
 *      security:
 *          - ApiKeyAuth: [admin]
 *      description: This route allows to create a new benevole.
 *      requestBody:
 *          description: The benevole to create.
 *          required: true
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Success.
 *          400:
 *              description: Bad request.
 */
//router.put('/:id', auth.verifyToken, auth.isAdmin ,BenevoleCtrl.updateBenevole);
router.put('/:id', BenevoleCtrl.updateBenevole);

/**
 * @swagger
 * /api/benevoles/{id}:
 *  delete:
 *      summary: Delete a benevole. Need to be an admin.
 *      tags: [Benevole]
 *      security:
 *          - ApiKeyAuth: [admin]
 *      description: This route allows to delete a benevole.
 *      parameters:
 *            - in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: The benevole id
 *      responses:
 *          200:
 *              description: Success.
 *          400:
 *              description: Bad request.
 */
// router.delete('/:id', auth.verifyToken, auth.isAdmin,BenevoleCtrl.deleteBenevole);

router.delete('/:id', BenevoleCtrl.deleteBenevole);


module.exports = router;