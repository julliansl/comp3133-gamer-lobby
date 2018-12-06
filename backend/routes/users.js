const express = require("express");
const User = require('../models/user');
const Account = require('../models/account');

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
  if (req.params.username) {
    console.log('GET: game by game:' + req.params.username);
    User.findOne({ username: req.params.username }, (err, user) => {
      if (err)  throw err;
      if (user == null)
        res.send(JSON.stringify({ message: `The user "${req.params.username}" does not exist in the database` }));
      else
        res.send(JSON.stringify(user));
    });
  } else {
    res.send(JSON.stringify({ message: "No user returned due to having no queries" }));
  }
})

router.post('', (req, res, next) => {
  res.contentType("application/json");
  if (req.body.token) {
    let token = req.body.token;
    let decodedToken = Buffer.from(token, 'base64').toString();
    decodedToken = decodedToken.split("#");
    let account = JSON.parse(decodedToken[decodedToken.length-1]);
    Account.findOne(account, (err, account) => {
      if (account == null) {
        res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
      } else {
        let values = req.body;
        if (values && Object.keys(values).length > 0 && values.username) {
          console.log('CREATE: User: ' + values.username);
          let user = User(values);
          user.save((err, doc) => {
            if (err)
              throw err;

            console.log(`Created new user: ${values.username}`);
            res.send(JSON.stringify(doc));
          });
        } else {
          res.send(JSON.stringify({ message: "Invalid CREATE Query for User" }));
        }
      }
    });
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
  }
})

router.put('', (req, res, next) => {
  res.contentType("application/json");
  if (req.body.token) {
    let token = req.body.token;
    let decodedToken = Buffer.from(token, 'base64').toString();
    decodedToken = decodedToken.split("#");
    let account = JSON.parse(decodedToken[decodedToken.length-1]);
    Account.findOne(account, (err, account) => {
      if (account == null) {
        res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
      } else {
        let values = req.body;
        if (values && Object.keys(values).length > 0 && values._id) {
          console.log('UPDATE: User by id: ' + values._id);

          User.findByIdAndUpdate(values._id, (err, user) => {
            if (user == null)
              res.send(JSON.stringify({ message: "Invalid UPDATE Query for User" }));
            else
              console.log(`Updated ${user.username} from Users collection`);
          });
        } else {
          res.send(JSON.stringify({ message: "Invalid UPDATE Query for User" }));
        }
      }
    });
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
  }
})

router.delete('', (req, res, next) => {
  res.contentType("application/json");
  if (req.body.token) {
    let token = req.body.token;
    let decodedToken = Buffer.from(token, 'base64').toString();
    decodedToken = decodedToken.split("#");
    let account = JSON.parse(decodedToken[decodedToken.length-1]);
    Account.findOne(account, (err, account) => {
      if (account == null) {
        res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
      } else {
        let values = req.body;
        if (values && Object.keys(values).length > 0 && values._id) {
          console.log('DELETE: User by id:' + values._id);
          console.log(values);

          User.findByIdAndDelete(values._id, (err) => {
            console.log(`Deleted ${values.username} from Users collection`);
          });
        } else {
          res.send(JSON.stringify({ message: "Invalid DELETE Query for User" }));
        }
      }
    });
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
  }
});

module.exports = router;
