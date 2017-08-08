var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var userSchema = mongoose.Schema({
      email : {type: String},
      nombre : {type: String},
      password : {type: String},

    });

var User = module.exports = mongoose.model('Usuarios', userSchema);

module.exports.getEmail = function(email, callback){
	var query = {email: email};
	User.findOne(query, callback);
},

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}