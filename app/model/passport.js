var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var User = require('.././model/schemaUsers');

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



  // passport.use(new localStrategy(function(username, password, done){
  //  passReqToCallback : true
  // }, function(req, email, password, done){
    
  //  //req.findOne({username: email});
  //  console.log(email); 
  //  console.log(password);
  //  return;



  // }
  // ));
};


/*
passport.use(new LocalStrategy(
  function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
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
**/ 