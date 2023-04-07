const mongoose = require('mongoose');
const {gameSchema} = require('./game.js');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  favoriteArcadeGames: [gameSchema],
  password: {type: String, required: true},
  email: {type: String, required: true}
});
const User = mongoose.model('User', userSchema);

module.exports = User;