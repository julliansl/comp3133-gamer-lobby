const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String, 
  level: Number, 
  mode: String, 
  time: String, 
  game: String, 
  status: String 
});

module.exports = mongoose.model('userlist', userSchema);