const express = require('express');
const router = express.Router();
const zoneCtrl = require('../controllers/zone.ctrl');


/**
 * @swagger
 * /api/zones:
 *  get:
 *      summary: Get all the zones that exists.
 *      tags: [Zone]
 *      security: []
 *      description: This route allows to get all the zones of the API.
 *      responses:
 *          200:
 *              description: Success.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Zone'
 *          400:
 *              description: Bad request.
 */
router.get('', zoneCtrl.getAllZones);


/**
 * @swagger
 * /api/zones/{id}:
 *  get:
 *      summary: Get a zone by its id.
 *      security: []
 *      tags: [Zone]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the zone to get.
 *      responses:
 *          200:
 *              description: Success.
 *              content:
 *                  application/json:
 *                     schema:
 *                          $ref: '#/components/schemas/Zone'
 *          404:
 *              description: Ressource not found.
 */
router.get('/:id', zoneCtrl.getZoneById);


router.get('/allNames', zoneCtrl.getAllZonesNames);


/**
 * @swagger
 * /api/zones/jeu/{id}:
 *  get:
 *      summary: Get the zone of a jeu by the id of the jeu.
 *      security: []
 *      tags: [Zone]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: The id of the jeu to get the zone.
 *      responses:
 *          200:
 *              description: Success.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Zone'
 *          404:
 *              description: Ressource not found.
 */
router.get('/jeu/:id', zoneCtrl.getZoneByJeuId);


/**
 * @swagger
 * /api/zones/{id}/jeux:
 *  get:
 *      summary: Get all the jeux of a zone by the id of the zone.
 *      security: []
 *      tags: [Zone]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: The id of the zone to get the jeux.
 *      responses:
 *          200:
 *              description: Success.
 *              content:
 *                  application/json:
 *                     schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Jeu'
 *          400:
 *              description: Ressource not found.
 */
router.get('/:id/jeux', zoneCtrl.getJeuxByZoneId);


/**
 * @swagger
 * /api/zones:
 *  post:
 *      summary: Create a new zone.
 *      security: []
 *      tags: [Zone]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Zone'
 *      responses:
 *          201:
 *              description:  Success.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Zone'
 *          400:
 *              description: Bad request.
 */
router.post('', zoneCtrl.createZone);


/**
 * @swagger
 * /api/zones/{id}:
 *  put:
 *      summary: Update a zone.
 *      security: []
 *      tags: [Zone]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: The id of the zone to update.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Zone'
 *      responses:
 *          200:
 *              description:  Success.
 *          400:
 *              description: Bad request.
 */
router.put('/:id', zoneCtrl.updateZone);


/**
 * @swagger
 * /api/zones/{id}:
 *  delete:
 *      summary: Delete a zone.
 *      security: []
 *      tags: [Zone]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: The id of the zone to delete.
 *      responses:
 *          200:
 *              description:  Success.
 *          400:
 *              description: Bad request.
 */
router.delete('/:id', zoneCtrl.deleteZone);


module.exports = router;