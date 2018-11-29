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

jae.save(function(err){
    if(err) throw err;
    console.log('User saved')
})