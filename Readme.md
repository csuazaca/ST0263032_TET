Proyecto01 - Topicos Especiales en Telematica

Realizado por Cristian David Suaza C.

Descripción de aplicación

Aplicación Web que permite cargar imagenes y posteriormente se podrán compartir, buscar y eliminar imagenes por usuarios.

1. Analisis
1.1 Requisitos funcionales:
	- Registrar usuarios
	- Login de Usuarios
	- Cargar imagenes
	
1.2 Herramientas para Despliegue:
	- Lenguaje de programación = JavaScript
	- Framework web backend: NodeJS - Express
	- Framework web frontend: se utilizará Templates JADE para Vista (V)
	- Base de datos: MongoDB
	- Web App Server: NodeJS
	- Web Server: NGINX y Apache Web Server
	
2. Desarollo

El archivo de confguración se encuentra en bin/www

2.1 Se generó la estructura con express generator (MVC), y al instalar con este generador, se debe iniciar con el comando set debug=app:* & npm start (en linux y mac se omite el "set")
# express app

2.2 Se realiza un sistema de login local con estrategia de passport.
module.exports = function(passport){

  passport.serializeUser(function(user, done){
    done(null, user);
  });

  passport.deserializeUser(function(obj, done){
    done(null, obj);
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
     User.getEmail(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }

      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid password'});
        }
      });
    });
  }));
  
 2.3 se tiene una base de datos mongo Proyecto01, y cuenta con dos colecciones usuarios e imagenes.
 

3. Diseño
Imagenes:
{ titulo: String, Descripcion: String }

3.2 Servicios Web

/* Servicio Web: Inserta un registro de la imagen en la Base de datos Método: PostImg: /us/perfil */

/* Consulta BD: Realiza la búsqueda en la base de datos, por campo email: getEmail: */

/* Servicio Web: Realiza el registro en la base de datos de los usuarios Método: postSignUp: /us/signup */

/* Servicio Web: Reliza la consulta para saber si el usario esta autenticado. Método: getUserPerfil: /us/sigin */


