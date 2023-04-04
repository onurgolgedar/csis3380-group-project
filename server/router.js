const express = require('express');
const router = express.Router();
const databaseOperations = require('./operations.js');
const Game = require('./models/game.js');
const GameReview = require('./models/gameReview.js');
const User = require('./models/user.js');
const Games = require('./data/games.js');
const GameReviews = require('./data/gameReviews.js');
const Users = require('./data/users.js');

router.get('/users', async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.send(users);
});

module.exports = router;