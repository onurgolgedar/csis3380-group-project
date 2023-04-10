const express = require("express");
const router = express.Router();
const Game = require("../models/game.js");
const User = require("../models/user.js");
const bodyParser = require("body-parser");
const { findById } = require("../models/gameReview.js");

router.use(bodyParser.json());

router.post("/", async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    return res.send(game);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all arcade games
router.get("/", async (req, res) => {
  try {
    const games = await Game.find({});

    return res.send(games);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all the arcade game favorite of a Single User
router.get("/arcadefavorite", async (req, res) => {
  try {
    const user = await User.findById(req.user)
      .populate("favoriteArcadeGames")
      .exec();
    if (!user) {
      console.log("Error -> User not logged in.");
      return res.status(404).json({ error: "User not logged in" });
    }

    return res.send(user.favoriteArcadeGames);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    return res.send(game);
  } catch (err) {
    console.error(err.message);
  }
});

//Search for an arcade game
router.get("/search-arcade/:name", async (req, res) => {
  try {
    const decodedName = decodeURIComponent(req.params.name);
    const regex = new RegExp(decodedName, "i");
    const examples = await Game.find({ name: regex });

    res.send(examples);
  } catch (err) {
    console.error(err.message);
  }
});

// check if the user like the game
router.get("/:id/checklike", async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      console.log("Error -> User not logged in.");
      return res.status(404).json({ error: "User not logged in" });
    }

    const game = await Game.findById(req.params.id);
    if (!game) {
      console.log("Error -> Game not Found");
      return res.status(404).json({ error: "Game not Found" });
    }

    const found_game = user.favoriteArcadeGames.find((g) => {
      console.log("Game_ID: ", g);
      return g.toString() === game._id.toString();
    });

    if (found_game) {
      console.log("found_game: ", found_game);
      return res.send({ isFavorite: true });
    } else {
      return res.send({ isFavorite: false });
    }
  } catch (err) {
    console.error(err.message);
  }
});

//Liking and disliking a Game
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      console.log("Error -> User not logged in.");
      return res.status(404).json({ error: "User not logged in" });
    }

    const game = await Game.findById(req.params.id);
    if (!game) {
      console.log("Error -> Game not Found");
      return res.status(404).json({ error: "Game not Found" });
    }

    const found_game_id = user.favoriteArcadeGames.findIndex((g) => {
      return g.toString() === game._id.toString();
    });

    if (found_game_id !== -1) {
      user.favoriteArcadeGames.splice(found_game_id, 1);
      await user.save();
    } else {
      user.favoriteArcadeGames.push(game._id);
      await user.save();
    }
    return res.send(user);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

module.exports = router;
