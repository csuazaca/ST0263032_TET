var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');
var passport = require('passport');
var control = require('.././controllers/ControlPanel');

router.get('/', controllers.HomeController.index);

//Ruta para registro usuarios
router.get('/us/signup', controllers.UserController.getSignUp);
router.post('/us/signup', controllers.UserController.postSignUp);

//Ruta para ingreso de usuarios
router.get('/us/signin', controllers.UserController.getSignIn);
router.post('/us/signin', passport.authenticate('local', {
	successRedirect : '/us/perfil',
	failureRedirect : '/us/signin',
	failureFlash: true
}));
router.get('/us/logout', controllers.UserController.logout);
router.get('/us/perfil', control.isLogged, controllers.UserController.getUserPerfil);

router.post('/us/perfil', controllers.UserController.postImg);


module.exports = router;
