const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    genre: String,
    review: String,
    release: Number,
    publisher: String,
    status: String
});

module.exports = mongoose.model('gamelist', gameSchema);