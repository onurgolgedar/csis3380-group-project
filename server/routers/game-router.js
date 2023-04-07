const express = require("express");
const router = express.Router();
const Game = require("../models/game.js");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const games = await Game.find({});
  return res.send(games);
});

router.get("/:id", async (req, res) => {
  const game = await Game.findOne({ _id: req.params.id });
  return res.send(game);
});

// For setting a game as favorite JUST TESTING
// router.put('/:id', async (req, res) => {
//     const gameId = req.params.id;
//     const updates = req.body;
//     console.log(req.body, gameId)
//     try {
//         const game = await Game.findByIdAndUpdate(gameId, updates, {new: true});
//         if(!game) {
//             return res.status(404).json({error: "Game Not Found"})
//         }
//         return res.json(game);
//     } catch (err) {
//         return res.status(500).send({err: err.message});
//     }
// })

module.exports = router;
