const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gameCode: { type: Number, required: true },
  description: { type: String, required: true },
  developer_name: { type: String, required: true },
  genre: { type: String, required: true },
  background_image: { type: String, required: true },
  released: { type: String, required: true },
  game_reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GameReview' }]
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
