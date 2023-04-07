const mongoose = require("mongoose");

const gameReviewSchema = new mongoose.Schema({
  gameID: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});

const GameReview = mongoose.model("GameReview", gameReviewSchema);

module.exports = GameReview;