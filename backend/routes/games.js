const express = require("express");
const Game = require('../models/game');

const router = express.Router();

router.get('', (req, res, next) => {
  res.contentType("application/json");
  console.log('GET: games Lists');
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

router.post('/:game', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: game by game: ' + req.params.game);
  game(req.params);
})

router.put('/:game', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: game by : ' + req.params.game);

  game.update({game: req.params.game}, (err, game) => {
    console.log(`Updated ${game.title} from games collection`);
  });
})

router.delete('/:game', (req, res, next) => {
  res.contentType("application/json");
  console.log('UPDATE: game by game: ' + req.params.game);

  game.findOneAndRemove({game: req.params.game}, (err, game) => {
    console.log(`Deleted ${game.title} from games collection`);
  });
});

module.exports = router;
