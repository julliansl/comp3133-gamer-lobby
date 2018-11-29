const express = require("express");
const User = require('../models/user');

const router = express.Router();

router.get('', (req, res, next) => {
  res.contentType("application/json");
  console.log('GET: Users Lists');
  User.find({}, (err, users) => {
    if (err) 
      throw err;
    res.send(JSON.stringify(users));
  });
});

router.get('/:username', (req, res, next) => {
  res.contentType("application/json");
  console.log('GET: User by username:' + req.params.username);
  User.findOne({username: req.params.username}, (err, user) => {
    if (err) 
      throw err;
    res.send(JSON.stringify(user));
  });
})

router.put('/:username', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: User by : ' + req.params.username);

  // Implement Mongoose update User by username
})

router.post('/:username', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: User by username: ' + req.params.username);
  User(req.params)
})

router.delete('/:username', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: User by username: ' + req.params.username);
  // Implement Mongoose delete one User by username

});

module.exports = router;
