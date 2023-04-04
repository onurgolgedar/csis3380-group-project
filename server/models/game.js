const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
  name: String,
  developer_name: String,
  description: String,
  genre: String
});
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;