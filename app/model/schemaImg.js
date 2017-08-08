var mongoose = require('mongoose');


var imgSchema = mongoose.Schema({
      titulo : {type: String},
      descripcion : {type: String},
      
    });

var img = module.exports = mongoose.model('Imagenes', imgSchema);