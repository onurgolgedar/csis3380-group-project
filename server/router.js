const express = require('express');
const router = express.Router();
const db = require('./db.js');
const Game = require('./models/game.js');
const GameReview = require('./models/gameReview.js');
const User = require('./models/user.js');

router.get('/users', async (req, res) => {
    const users = await User.find({});
    res.send(users);
});

// ! Just for test purposes - do not include in the released API
router.get('/users/:username', async (req, res) => {
    const user = await User.findOne({username: req.params.username});
    res.send(user);
});

router.get('/games', async (req, res) => {
    const games = await Game.find({});
    res.send(games);
});

router.get('/games/:id', async (req, res) => {
    const game = await Game.findOne({_id: req.params.id});
    res.send(game);
});

// For setting a game as favorite
router.put('/games/:id', async (req, res) => {
    const gameId = req.params.id;
    const updates = req.body;
    console.log(req.body, gameId)
    try {
        const game = await Game.findByIdAndUpdate(gameId, updates, {new: true});
        if(!game) {
            return res.status(404).json({error: "Game Not Found"})
        }

        res.json(game);
    } catch (err) {
        res.status(500).send({err: err.message});
    }
})

router.get('/gamereviews/:gameID', async (req, res) => {
    const gamereviews = await GameReview.findOne({gameID: req.params.gameID});
    res.send(gamereviews);
});

router.get('/gamereviews/:userID', async (req, res) => {
    const gamereviews = await GameReview.findOne({userID: req.params.userID});
    res.send(gamereviews);
});

router.get('/gamereviews', async (req, res) => {
    const gamereviews = await GameReview.find({});
    res.send(gamereviews);
});

module.exports = router;