const express = require("express");
const router = express.Router();
const GameReview = require("../models/gameReview.js");
const User = require("../models/user.js");
const Game = require("../models/game.js");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

const checkUserLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    console.log("User not logged");
    return res.send({ error: "Unauthorized" });
  }
};

// POST a comment
router.post("/:gameId", checkUserLoggedIn, async (req, res) => {
  try {
    const { comment_text } = req.body;
    const user = await User.findById(req.user);
    if (user === null) {
      console.log("Error -> User not logged in.");
      return res.status(404).json({ error: "User not logged in" });
    }

    const game = await Game.findById(req.params.gameId);
    if (!game) {
      console.log("Error -> Game not Found");
      return res.status(404).json({ error: "Game not Found" });
    }

    const gameReview = new GameReview({
      game: game._id,
      author: user._id,
      author_username: user.username,
      date: new Date(),
      text: comment_text,
    });

    await gameReview.save();

    game.game_reviews.push(gameReview._id);

    await game.save();

    res.send(gameReview);
  } catch (err) {
    console.error(err.message);
  }
});

// GET all the comments from ONE game
router.get("/:gameId", async (req, res) => {
  try {
    const game = await Game.findById(req.params.gameId)
      .populate("game_reviews")
      .populate({
        path: "game_reviews.author",
        model: "User",
      })
      .exec();
    if (!game) {
      console.log("Error -> Game not Found");
      return res.status(404).json({ error: "Game not Found" });
    }

    game.game_reviews.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    res.send(game.game_reviews);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE a comment....

// router.get("/:gameId", async (req, res) => {
//   const gamereviews = await GameReview.find({ gameID: req.params.gameID });
//   return res.send(gamereviews);
// });

// router.get("/", async (req, res) => {
//   const gamereviews = await GameReview.find({});
//   return res.send(gamereviews);
// });

module.exports = router;
