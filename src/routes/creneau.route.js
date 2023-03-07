const express = require('express');
const router = express.Router();
const creneauCtrl = require('../controllers/creneau.ctrl');
const auth = require('../middlewares/auth');


/**
 * @swagger
 * /api/creneaux:
 *   get:
 *     summary: Récupère tous les créneaux existants.
 *     tags: [Creneau]
 *     security:
 *          - ApiKeyAuth: []
 *     description: Cette route permet de récupérer tous les créneaux existants de l'API.
 *     responses:
 *       200:
 *         description: Succès.
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Creneau'
 *       500:
 *         description: Erreur serveur.
 */
router.get('', creneauCtrl.getAllCreneaux);



/**
 * @swagger
 *  /api/creneaux/benevole/{id}:
 *      get:
 *          summary: Récupère tous les créneaux d'un bénévole.
 *          tags: [Creneau]
 *          security: []
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: string
 *                required: true
 *                description: L'id du bénévole à récupérer.
 *          responses:
 *              200:
 *                  description: Success.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Creneau'
 *              400:
 *                  description: Erreur de requête. 
 */
router.get('/benevole/:id', creneauCtrl.getCreneauByBenevole)



/**
 * @swagger
 * /api/creneaux/{id}:
 *   get:
 *     summary: Récupère un créneau par son id.
 *     security: []
 *     tags: [Creneau]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: L'id du créneau à récupérer.
 *     responses:
 *          200:
 *              description: Succès.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Creneau'
 *          400:
 *              description: Erreur de requête.
 *          
 */
router.get('/:id', creneauCtrl.getCreneauById);


/**
 * @swagger
 * /api/creneaux:
 *  post:
 *     summary: Créer un créneau.
 *     tags: [Creneau]
 *     security: []
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                     date:
 *                         type: string
 *                         description: La date du créneau.
 *                     heureDebut:
 *                         type: string
 *                         description: L'heure de début du créneau.
 *                     heureFin:
 *                         type: string
 *                         description: L'heure de fin du créneau.
 *                     zone:
 *                         type: string
 *                         description: L'id de la zone du créneau.
 *                     benevoles:
 *                         type: array
 *                         description: Les id des bénévoles du créneau.
 *     responses:
 *         200:
 *            description: Succès.
 *         400:
 *            description: Erreur de requête.
 */
router.post('', creneauCtrl.createCreneau);


/**
 * @swagger
 * /api/creneaux/{id}:
 *  put:
 *    summary: Met à jour un créneau.
 *    tags: [Creneau]
 *    security: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: L'id du créneau à mettre à jour.
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema: 
 *                 $ref: '#/components/schemas/Creneau'
 *    responses:
 *      200:
 *          description: Succès.
 *      400:
 *          description: Erreur côté serveur. Echec dans la mise à jour du créneau.
 */
router.put('/:id', creneauCtrl.updateCreneau);


/**
 * @swagger
 * /api/creneaux/{id}:
 *  delete:
 *      summary: Supprime un créneau.
 *      tags: [Creneau]
 *      security: []
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *              type: string
 *           required: true
 *           description: L'id du créneau à supprimer.
 *      responses:
 *          200:
 *              description: Succès.
 *          400:
 *              description: Erreur dans la suppression.
 * 
 */
router.delete('/:id', creneauCtrl.deleteCreneau);



module.exports = router;