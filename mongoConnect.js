var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin1:admin1@ds223760.mlab.com:23760/user_list');

var port = process.env.PORT || 3000;
app.listen(port);

var Schema = mongoose.Schema;
var userSchema = new Schema({username: String, level: Number, mode: String, time: String, game: String, status: String });
var User = mongoose.model('userlist', userSchema);

var data = User.find(function (err, user) {
    if (err) return handleError(err);
    data = user;
    console.log(user);
  });