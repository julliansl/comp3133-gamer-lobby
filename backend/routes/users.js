const express = require("express");
const User = require('../models/user');
const { Auth } = require('../utils');

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
  let values = req.body;
  if (values) {
    if (Auth.verify(values.token)) {
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
    } else {
      res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
    }
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization, No Token Given" }));
  }
})

router.put('', (req, res, next) => {
  res.contentType("application/json");
  let values = req.body;
  if (values) {
    if (Auth.verify(values.token) 
    || (values.type && values.type === "invite")) {
      if (values && Object.keys(values).length > 0 && values._id) {
        console.log('UPDATE: User by id: ' + values._id);

        User.findByIdAndUpdate(values._id, values, (err, user) => {
          if (err) throw err;

          if (user == null)
            res.send(JSON.stringify({ message: "Invalid UPDATE Query for User" }));
          else {
            console.log(`Updated ${user.username} from Users collection`);
            res.send(JSON.stringify(user));
          }
        });
      } else {
        res.send(JSON.stringify({ message: "Invalid UPDATE Query for User" }));
      }
    } else {
      res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
    }
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization, No token Given" }));
  }
})

router.delete('', (req, res, next) => {
  res.contentType("application/json");
  let values = req.body;
  if (values) {
    if (Auth.verify(values.token)) {
      if (values && Object.keys(values).length > 0 && values._id) {
        console.log('DELETE: User by id:' + values._id);

        User.findByIdAndDelete(values._id, (err) => {
          console.log(`Deleted ${values.username} from Users collection`);
        });
      } else {
        res.send(JSON.stringify({ message: "Invalid DELETE Query for User" }));
      }
    } else {
      res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
    }
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization, No Token Given" }));
  }
});

module.exports = router;
