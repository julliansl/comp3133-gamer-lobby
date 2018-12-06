const express = require("express");
const Game = require('../models/game');

const router = express.Router();

router.get('', (req, res, next) => {
  res.contentType("application/json");
  console.log('GET: Games Lists');
  Game.find({}, (err, games) => {
    if (err) 
      throw err;
    res.send(JSON.stringify(games));
  });
});

router.get('/:game', (req, res, next) => {
  res.contentType("application/json");
  console.log('GET: game by game:' + req.params.game);
  Game.findOne({game: req.params.game}, (err, game) => {
    if (err) 
      throw err;
    res.send(JSON.stringify(game));
  });
})

router.post('', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: game by game: ' + req.params.game);
  Game(req.body);
})

router.put('', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: game by : ' + req.body.game);

  game.update({game: req.params.game}, (err, game) => {
    console.log(`Updated ${game.title} from games collection`);
  });
})

router.delete('', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: game by game: ' + req.body.game);

  game.findOneAndRemove({game: req.body.game}, (err, game) => {
    console.log(`Deleted ${game.title} from games collection`);
  });
});

module.exports = router;
