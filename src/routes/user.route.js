var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/user.ctrl');
var auth = require('../middlewares/auth');


/**
 * @swagger
 *  /api/user/{id}:
 *      get:
 *          summary: Allows to get the infos of the user.
 *          security:
 *              - ApiKeyAuth: []
 *          tags: [User]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: The id of the user.
 *          responses:
 *              200:
 *                  description: Success.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 *              400:
 *                  description: Request error.
 *              500:
 *                  description: Server error.
 */
router.get('/:id', auth.verifyToken, userCtrl.getInfosUser);

/**
 * @swagger
 *  /api/user/{id}:
 *     put:
 *          summary: Allows to update the infos of the user.
 *          security:
 *              - ApiKeyAuth: []
 *          tags: [User]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                   type: string
 *                required: true
 *                description: The id of the user.
 *          requestBody:
 *             required: true
 *             content:
 *               application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: Success.
 *              401:
 *                  description: It is not your account, you don't have the right to modify the account.
 *              500:
 *                 description: Servor error.
 */
router.put('/:id', auth.verifyToken, userCtrl.updateUser);

module.exports = router;