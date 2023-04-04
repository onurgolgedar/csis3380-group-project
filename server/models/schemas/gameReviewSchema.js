const mongoose = require('mongoose');

const gameReviewSchema = new mongoose.Schema({
    gameID: { type: String, required: true },
    user: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true }
});

module.exports = gameReviewSchema;