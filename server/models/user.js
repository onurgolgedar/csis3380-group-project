const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  favoriteGames: [String],
  password: String
});
const User = mongoose.model('User', userSchema);

module.exports = User;