const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { "type": String, "default": "User" }, 
  level: { "type": Number, "default": 1 },
  mode: { "type": String, "default": "None" },
  time: { "type": String, "default": "" }, 
  game: { "type": String, "default": "Lobby" },
  status: { "type": String, "default": "Online" }
});

module.exports = mongoose.model('users', userSchema);