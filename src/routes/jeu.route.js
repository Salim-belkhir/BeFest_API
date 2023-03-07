const express = require('express');
const router = express.Router();
const jeuCtrl = require('../controllers/jeu.ctrl');


/**
 * @swagger
 * /api/jeux:
 *  get:
 *     summary: Récupère tous les jeux existants.
 *     tags: [Jeu]
 *     security: []
 *     description: Cette route permet de récupérer tous les jeux existants de l'API.
 *     responses:
 *      200:
 *        description: Succès.
 *        content:
 *         application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Jeu'
 *      500:
 *        description: Erreur serveur.
 */
router.get('/', jeuCtrl.getAllJeux);

/**
 * @swagger
 * /api/jeux/{id}:
 *  get:
 *     summary: Récupère un jeu par son id.
 *     security: []
 *     tags: [Jeu]
 *     parameters:
 *         - in: path
 *           name: id
 *           schema:
 *              type: string
 *           required: true
 *           description: L'id du jeu à récupérer.
 *     responses:
 *          200:
 *              description: Succès.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Jeu'
 *          400:
 *              description: Erreur de requête.
 * 
 */
router.get('/:id', jeuCtrl.getJeuById);

/**
 * @swagger
 * /api/jeux/type/{name}:
 *  get:
 *      summary: Récupère tous les jeux qui sont du type dont le nom est passé dans l'URL.
 *      security: []
 *      tags: [Jeu]
 *      parameters:
 *        - in: path
 *          name: name
 *          schema:
 *              type: string
 *          required: true
 *          description: Le nom du type de jeu à récupérer.
 *      responses:
 *          200:
 *              description: Succès.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                             $ref: '#/components/schemas/Jeu'
 *          400:
 *              description: Erreur de requête.
 */
router.get('/:name', jeuCtrl.getJeuxByType);

/**
 * @swagger
 * /api/jeux/zone/{id}:
 *  get:
 *      summary: Récupère tous les jeux qui sont dans la zone dont l'id est passé dans l'URL.
 *      security: []
 *      tags: [Jeu]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: L'id de la zone à récupérer.
 *      responses:
 *          200:
 *              description: Succès.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Jeu'
 *          400:
 *              description: Erreur de requête.
 */
router.get('/zone/:id', jeuCtrl.getJeuxByZoneId);


router.post('/search/', jeuCtrl.searchJeux)

/**
 * @swagger
 * /api/jeux:
 *   post:
 *      summary: Créer un nouveau jeu.
 *      security: []
 *      tags: [Jeu]
 *      requestBody:
 *          required: true
 *          content:
*               application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Jeu'
 *          responses:
 *              201:
 *                  description: Succès.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Jeu'
 *              400:
 *                  description: Erreur dans la requête.
 */
router.post('/', jeuCtrl.createJeu);


/**
 * @swagger
 * /api/jeux/{id}:
 *  put:
 *      summary: Met à jour un jeu.
 *      security: []
 *      tags: [Jeu]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: L'id du jeu à mettre à jour.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Jeu'
 *      responses:
 *          200:
 *              description: Succès.
 *          400:
 *              description: Erreur de requête.
 */
router.put('/:id', jeuCtrl.updateJeu);

/**
 * @swagger
 * /api/jeux/{id}:
 *  delete:
 *      summary: Supprime un jeu.
 *      security: []
 *      tags: [Jeu]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: L'id du jeu à supprimer.
 *      responses:
 *          200:
 *              description: Succès.
 *          400:
 *              description: Erreur de requête.
 */
router.delete('/:id', jeuCtrl.deleteJeu);


module.exports = router;