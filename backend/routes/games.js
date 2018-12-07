const express = require("express");
const Game = require('../models/game');
const { hash } = require('../utils');

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
  let values = req.body;
  if (values) {
    if (Auth.verify(values.token)) {
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
    } else {
      res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
    }
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization, No token Given" }));
  }
})

// UPDATE
router.put('', (req, res, next) => {
  res.contentType("application/json");
  let values = req.body;
  if (values) {
    if (Auth.verify(values.token)) {
      if (values && Object.keys(values).length > 0 && values._id) {
        console.log('UPDATE: Game by id: ' + values._id);
        
        Game.findByIdAndUpdate(values._id, values, (err, game) => {
          if (err) throw err;

          if (game == null)
            res.send(JSON.stringify({ message: "Invalid UPDATE Query for Game" }));
          else {
            console.log(`Updated ${game.title} from Games collection`);
            res.send(JSON.stringify(game));
          }
        });

      } else {
        res.send(JSON.stringify({ message: "Invalid UPDATE Query for Game" }));
      }
    } else {
      res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
    }
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization, No token Given" }));
  }
})

// DELETE
router.delete('', (req, res, next) => {
  res.contentType("application/json");
  let values = req.body;
  if (values) {
    if (Auth.verify(values.token)) {
      if (values && Object.keys(values).length > 0 && values._id) {
    
        console.log('DELETE: User by username' + values._id);

        User.findByIdAndDelete(values._id, (err) => {
          console.log(`Deleted ${values.title} from Games collection`);
        });
        
      } else {
        res.send(JSON.stringify({ message: "Invalid DELETE Query for Games" }));
      }
    } else {
      res.send(JSON.stringify({ message: "Invalid Authorization Token" }));
    }
  } else {
    res.send(JSON.stringify({ message: "Invalid Authorization, No Token Given" }));
  }
});

module.exports = router;
