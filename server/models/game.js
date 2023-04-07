const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  gameCode: Number,
  developer_name: String,
  description: String,
  genre: String,
  background_image: String,
  isFavorited: { type: Boolean, default: false },
  released: String,
});
const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
