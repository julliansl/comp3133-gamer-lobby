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

router.post('', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: User by username: ' + req.body.username);
  User(req.body);
})

router.put('', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: User by : ' + req.body.username);

  User.update({username: req.body.username}, (err, user) => {
    console.log(`Updated ${user.username} from Users collection`);
  });
})

router.delete('', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: User by username: ' + req.body.username);

  User.findOneAndRemove({username: req.body.username}, (err, user) => {
    console.log(`Deleted ${user.username} from Users collection`);
  });
});

module.exports = router;
