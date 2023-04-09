const mongoose = require("mongoose");

const gameReviewSchema = new mongoose.Schema({
  game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  author_username: { type: String, required: true},
  date: {type: Date, required: true},
  text: { type: String, required: true },
});

const GameReview = mongoose.model("GameReview", gameReviewSchema);

module.exports = GameReview;