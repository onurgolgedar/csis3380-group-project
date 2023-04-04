const mongoose = require('mongoose');
const gameReviewSchema = new mongoose.Schema({
  gameID: String,
  user: String,
  title: String,
  text: String
});
const GameReview = mongoose.model('GameReview', gameReviewSchema);

module.exports = GameReview;