'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/proyecto01'); //, function(error){
//       if(error){
//         throw error; 
//         console.log('No Conectado a MongoDB');
//       }else{
//         console.log('Conectado a MongoDB');
//         end; 
//       }
// });

var db = mongoose.connection;

module.exports = mongoose;