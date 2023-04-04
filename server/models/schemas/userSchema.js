const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    favoriteGames: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    }],
    password: {
        type: String,
        required: true
    }
});

module.exports = userSchema;