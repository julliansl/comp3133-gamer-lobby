const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: { "type": String, "default": "username" },
  password: { "type": String, "default": "password" }
});

module.exports = mongoose.model('accounts', accountSchema);