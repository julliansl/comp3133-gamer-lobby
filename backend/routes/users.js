const express = require("express");
const User = require('../models/user');

const router = express.Router();

router.get('', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.contentType("application/json");
  console.log('GET: Users Lists');
  User.find({}, (err, users) => {
    if (err) 
      throw err;
    res.send(JSON.stringify(users));
  });
});

router.get('/:username', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.contentType("application/json");
  console.log('GET: User by username:' + req.params.username);
  User.findOne({username: req.params.username}, (err, user) => {
    if (err) 
      throw err;
    res.send(JSON.stringify(user));
  });
})

router.post('/:username', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.contentType("application/json");
  console.log('UPDATE: User by username: ' + req.params.username);
  User(req.params);
})

router.put('/:username', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.contentType("application/json");
  console.log('UPDATE: User by : ' + req.params.username);

  User.update({username: req.params.username}, (err, user) => {
    console.log(`Updated ${user.username} from Users collection`);
  });
})

router.delete('/:username', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.contentType("application/json");
  console.log('UPDATE: User by username: ' + req.params.username);

  User.findOneAndRemove({username: req.params.username}, (err, user) => {
    console.log(`Deleted ${user.username} from Users collection`);
  });
});

module.exports = router;
