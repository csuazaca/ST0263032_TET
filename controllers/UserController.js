var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

module.exports = {

	getSignUp :  function(req, res, next){
		return res.render('users/signup');
	},

	postSignUp : function(req, res, next){
	   //Conectar al schema de la base de datos
    var Usuarios = require('.././model/schemaUsers');

    //Encryptar Password
    var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.password, salt);

    //Agregar Usuarios a BD
    var users = {
      email : req.body.email,
      nombre : req.body.nombre,
      password : password,

    };

    var user = new Usuarios(users);

    user.save(function(err){
      console.log(user);
    });

    req.flash('info','Registro exitoso, puede iniciar sesion');
    return res.redirect('/us/signin');

	},

  postImg : function(req, res, next){
     //Conectar al schema de la base de datos
    var Image = require('.././model/schemaImg');

    //Agregar Imagen a BD
    var images = {
      titulo : req.body.titulo,
      descripcion : req.body.descripcion,

    };

    var img = new Image(images);
    console.log(req.body.titulo)
    console.log(req.body.descripcion)

    img.save(function(err){
      console.log(img);
    });

    req.flash('info','Su Imagen ha sido cargada correctamente');
    return res.redirect('/us/perfil');

  },

  getSignIn : function(req, res, next){
    return res.render('users/signin', {message: req.flash('info')});
  },

  logout : function(req, res, next){
    req.logout();
    res.redirect('/us/signin');
  },

  getUserPerfil : function(req, res, next){
    res.render('users/perfil', {
      isAuthenticated : req.isAuthenticated(),
      user : req.user
    });
  }

};