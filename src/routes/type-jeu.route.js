const express = require('express');
const router = express.Router();
const TypeJeuCtrl = require('../controllers/type-jeu.ctrl');


/**
 * @swagger
 * /api/type-jeux:
 *  get:
 *    summary: Récupère tous les types de jeux existants.
 *    tags: [TypeJeu]
 *    security: []
 *    description: Cette route permet de récupérer tous les types de jeux existants de l'API.
 *    responses:
 *      200:
 *          description: Succès.
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                      $ref: '#/components/schemas/TypeJeu'
 *      500:
 *          description: Erreur serveur.
 */
router.get('/', TypeJeuCtrl.getAllTypeJeu);


/**
 * @swagger
 * /api/type-jeux/{id}:
 *  get:
 *      summary: Récupère un type de jeu par son id.
 *      security: []
 *      tags: [TypeJeu]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: L'id du type de jeu à récupérer.
 *      responses:
 *          200:
 *              description: Succès.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/TypeJeu'
 *          400:
 *              description: Erreur de requête.
 */
router.get('/:id', TypeJeuCtrl.getTypeJeuById);


/**
 * @swagger
 * /api/type-jeux:
 *  post:
 *      summary: Créer un nouveau type de jeu.
 *      tags: [TypeJeu]
 *      security: []
 *      description: Cette route permet de créer un nouveau type de jeu.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: Succès.
 *          400:
 *              description: Erreur de requête.
 * 
 */
router.post('/', TypeJeuCtrl.createTypeJeu);


module.exports = router;