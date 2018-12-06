const express = require("express");
const Account = require('../models/account');

const router = express.Router();

router.post('', (req, res, next) => {
  res.contentType("application/json");
  let authInfo = null;
  Account.findOne({ username: req.body.username }, (err, account) => {
    if (err) throw err;

    if (account == null) {
      res.send(JSON.stringify({ message: "Invalid Credentials", body: req.body }));
    } else if (account.password === req.body.password) {
      authInfo = JSON.parse(JSON.stringify(account));
      delete authInfo.password;
      authInfo.token = Buffer.from(`authenticated#${account.username}`).toString('base64');

      res.send(JSON.stringify(authInfo));
    }
  });
});

module.exports = router;