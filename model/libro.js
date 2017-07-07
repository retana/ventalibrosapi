const mongoose = require('mongoose');

const LibroSchema = mongoose.Schema({
  nombre    : {type:String},
  ISBN      : {type:String},
  autor     : {type:String},
  editorial : {type:String}
});

exports.LibroModel = mongoose.model('libro',LibroSchema);
