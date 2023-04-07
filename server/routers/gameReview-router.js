const express = require("express");
const router = express.Router();
const GameReview = require('../models/gameReview.js');
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/gamereviews/:gameID', async (req, res) => {
    const gamereviews = await GameReview.findOne({gameID: req.params.gameID});
    res.send(gamereviews);
});

router.get('/gamereviews', async (req, res) => {
    const gamereviews = await GameReview.find({});
    res.send(gamereviews);
});


module.exports = router;