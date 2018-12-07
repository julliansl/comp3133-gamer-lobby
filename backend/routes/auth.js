const express = require("express");
const Account = require('../models/account');
const { Auth } = require('../utils');

const router = express.Router();

router.post('', (req, res, next) => {
  res.contentType("application/json");
  let authInfo = null;
  Account.findOne({ username: req.body.username }, (err, account) => {
    if (err) throw err;

    if (account == null) {
      res.send(JSON.stringify({ message: "Invalid Credentials" }));
    } else if (account.password === req.body.password) {
      authInfo = JSON.parse(JSON.stringify(account));
      delete authInfo.password;

      payload = { "_id": account._id }
      authInfo.token = Auth.generateToken(payload);
      res.send(JSON.stringify(authInfo));
    }
  });
});

router.post('/create', (req, res, next) => {
  res.contentType("application/json");
  let values = req.body;
  if (values && Object.keys(values).length > 0 && values.username) {
    console.log('CREATE: account with username: ' + values.username);
    let user = User(values);
    user.save((err, doc) => {
      if (err)
        throw err;

      console.log(`Created new account: ${values.username}`);
      res.send(JSON.stringify(doc));
    });
  } else {
    res.send(JSON.stringify({ message: "Invalid CREATE Query for Account" }));
  }
});

module.exports = router;