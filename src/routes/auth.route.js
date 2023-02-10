var express = require('express');
var router = express.Router();
var authCtrl = require('../controllers/auth.ctrl');
var verifySignup = require('../middlewares/verifySignup');


//Road to signup
// Can create a new user
// Here we use the middleware verifySignup to check if the email is already used and if the role is correct
router.post('/signup', [verifySignup.checkDuplicateEmail, verifySignup.checkRolesExisted], authCtrl.signup);

//Road to signin
// Can connect a user
router.post('/signin', authCtrl.signin);

//Road to signout
// Can disconnect a user
router.post('/signout', authCtrl.signout);



module.exports = router;