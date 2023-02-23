const express = require('express');
const router = express.Router();
const zoneCtrl = require('../controllers/zone.ctrl');


/**
 * @swagger
 *  /api/zone:
 *    get:
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
 *  /api/zone/{id}:
 *   get:
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
// Path : api/zone/:id
// Get a Zone by its id
router.get('/:id', zoneCtrl.getZoneById);



// Get the zone of a jeu by the id of the jeu
// Path : api/zone/jeu/:id
router.get('/jeu/:id', zoneCtrl.getZoneById);



// Path : api/zone/:id/jeux
// Get all jeux of a zone
router.get('/:id/jeux', zoneCtrl.getJeuxByZoneId);


// Path : api/zone/:id
// Create a new Zone
router.post('', zoneCtrl.createZone);


// Path : api/zone/:id
// Update a Zone
router.put('/:id', zoneCtrl.updateZone);


// Path : api/zone/:id
// Delete a Zone
router.delete('/:id', zoneCtrl.deleteZone);


module.exports = router;