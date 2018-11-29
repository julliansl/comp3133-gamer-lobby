var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin1:admin1@ds223760.mlab.com:23760/user_list');

var port = process.env.PORT || 3000;
app.listen(port);

var Schema = mongoose.Schema;
var userSchema = new Schema({username: String, level: Number, mode: String, time: String, game: String, status: String })
var User = mongoose.model('Userlist', userSchema);

var jae = User({username: 'JaePun', level: 3405, mode: 'Competitive', time: '1h', game: 'Overwatch', status:'In Game'});
var ntay = User({username: 'nTay', level: 3354, mode: 'Competitive', time: '1h', game: 'Overwatch', status: 'In Game'});
var xi = User({username: 'Xishiora', level: 50, mode: 'Investigation', time: '25min', game: 'Monster Hunter World', status: 'In Game'});
var mon = User({username: 'Monking', level: 15, mode: 'Competitive', time: '5min', game: 'Counter-Strike: Global Offensive', status: 'Lobby'});
var shroud = User({username: 'Shroud', level: 80, mode: 'Blackout', time: '7h47min', game: 'Call of Duty: Black Ops 4', status: 'Lobby'});
var the = User({username: 'Theonekiller', level: 18, mode: 'Ranked', time: '35min', game: 'Dota 2', status: 'In Game'});

jae.save(function(err){
    if(err) throw err;
    console.log('User saved')
})

ntay.save(function(err){
    if(err) throw err;
    console.log('User saved')
})
xi.save(function(err){
    if(err) throw err;
    console.log('User saved')
})
mon.save(function(err){
    if(err) throw err;
    console.log('User saved')
})
shroud.save(function(err){
    if(err) throw err;
    console.log('User saved')
})
the.save(function(err){
    if(err) throw err;
    console.log('User saved')
})
