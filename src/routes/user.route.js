var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/user.ctrl');
var auth = require('../middlewares/auth');


// To get the infos of the user
router.get('/:id', auth.verifyToken, userCtrl.getInfosUser);

// To update the infos of the user
router.put('/:id', userCtrl.updateUser);


module.exports = router;