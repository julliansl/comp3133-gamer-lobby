const express = require("express");
const Game = require('../models/game');
const Account = require('../models/account');

const router = express.Router();

// READ ALL
router.get('', (req, res, next) => {
  res.contentType("application/json");
  console.log('GET: Games Lists');
  Game.find({}, (err, games) => {
    if (err) 
      throw err;
    res.send(JSON.stringify(games));
  });
});

// READ
router.get('/:game', (req, res, next) => {
  res.contentType("application/json");
  if (req.params.game) {
    console.log('GET: game by game:' + req.params.game);
    Game.findOne({ game: req.params.game }, (err, game) => {
      if (err)  throw err;
      if (game == null)
        res.send(JSON.stringify({ message: `The game "${req.params.game}" does not exist in the database` }));
      else
        res.send(JSON.stringify(game));
    });
  } else {
    res.send(JSON.stringify({ message: "No game returned due to having no queries" }));
  }
})

// CREATE
router.post('', (req, res, next) => {
  res.contentType("application/json");
  if (req.body.token) {
    let token = req.body.token;
    let decodedToken = Buffer.from(token, 'base64').toString();
    decodedToken = token.split("#");
    let account = JSON.parse(decodedToken[decodedToken.length-1]);
    Account.findOne(account, (err, account) => {
      if (account == null) {
        res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
      } else {
        let values = req.body;
        if (values && Object.keys(values).length > 0 && values.title) {
          console.log('CREATE: Game by id: ' + values.title);
          let game = Game(values);
          game.save((err, doc) => {
            if (err)
              throw err;

            console.log(`Created new game: ${values.title}`);
            res.send(JSON.stringify(doc));
          });
        } else {
          res.send(JSON.stringify({ message: "Invalid CREATE Query for Game" }));
        }
      }
    });
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
  }
})

// UPDATE
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
        if (values && Object.keys(values).length > 0 && values.username) {
          console.log('UPDATE: Game by id: ' + values._id);

          User.findByIdAndUpdate(values._id, (err, user) => {
            console.log(`Updated ${user.username} from Games collection`);
          });
        } else {
          res.send(JSON.stringify({ message: "Invalid UPDATE Query for Game" }));
        }
      }
    });
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
  }
})

// DELETE
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
        if (values && Object.keys(values).length > 0 && values.username) {
          console.log('DELETE: User by username' + values.username);
          console.log(values);

          User.findByIdAndDelete(values._id, (err) => {
            console.log(`Deleted ${values.title} from Games collection`);
          });
        } else {
          res.send(JSON.stringify({ message: "Invalid DELETE Query for Games" }));
        }
      }
    });
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
  }
});

module.exports = router;
