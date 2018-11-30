var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin1:admin1@ds223760.mlab.com:23760/user_list');

var port = process.env.PORT || 3000;
app.listen(port);

var Schema = mongoose.Schema
var gameSchema = new Schema({title: String, genre: String, review: String, release: Number, publisher: String, status: String});

var Game = mongoose.model('gamelist', gameSchema);

var overwatch = Game({title: 'Overwatch', genre: 'FPS', review: 'Mostly Positive', release: 2016, publisher: 'Blizzard', status: 'Active'});
var mhw = Game({title: 'Monster Hunter World', genre: 'RPG', review: 'Very Positive', release: 2018, publisher: 'Capcom', status: 'Active'});
var d2 = Game({title: 'Dota 2', genre: 'MOBA', review: 'Very Positive', release: 2013, publiser: 'Valve', status: 'Active'});
var csgo = Game({title: 'Counter-Strike: Global Offensive', genre: 'FPS', review: 'Very Positive', release: 2012, publiser: 'Valve', status: 'Active'});
var cod = Game({title: 'Call of Duty: Black Ops 4', genre: 'FPS', review: 'Mixed', release: 2018, publisher: 'Activision', status: 'Active'});
var ds3 = Game({title: 'Dark Souls 3', genre: 'ARPG', review: 'Overwhelming Positive', release: 2016, publisher: 'BANDAI', status: 'Active'});
var mk8 = Game({title: 'Mario Kart 8', genre: 'Racing', review: 'Overwhelming Positive', release: 2017, publisher: 'Nintendo', status: 'Active'});

overwatch.save(function(err) {
    if(err) throw err;
    console.log('Game saved');
});
mhw.save(function(err) {
    if(err) throw err;
    console.log('Game saved');
});

d2.save(function(err) {
    if(err) throw err;
    console.log('Game saved');
});

csgo.save(function(err) {
    if(err) throw err;
    console.log('Game saved');
});

cod.save(function(err) {
    if(err) throw err;
    console.log('Game saved');
});

ds3.save(function(err) {
    if(err) throw err;
    console.log('Game saved');
});

mk8.save(function(err) {
    if(err) throw err;
    console.log('Game saved');
});