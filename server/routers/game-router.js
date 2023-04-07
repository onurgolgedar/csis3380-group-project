const express = require("express");
const router = express.Router();
const {Game} = require('../models/game.js');
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/games', async (req, res) => {
    const games = await Game.find({});
    res.send(games);
});

router.get('/games/:id', async (req, res) => {
    const game = await Game.findOne({_id: req.params.id});
    res.send(game);
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
//         res.json(game);
//     } catch (err) {
//         res.status(500).send({err: err.message});
//     }
// })


module.exports = router;