const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: { "type": String, "default": "Game" },
    genre: { "type": String, "default": "Genre"},
    review: { "type": String, "default": ""},
    release: { "type": Number, "default": ""},
    publisher: { "type": String, "default": "Publisher" },
    status: { "type": String, "default": "Active" }
});

module.exports = mongoose.model('games', gameSchema);