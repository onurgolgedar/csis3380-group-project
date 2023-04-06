const mongoose = require('mongoose');

const gameReviewSchema = new mongoose.Schema({
    gameID: { type: String, required: true },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: { type: String, required: true },
    text: { type: String, required: true }
});

module.exports = gameReviewSchema;