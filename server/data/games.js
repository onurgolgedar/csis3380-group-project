const Game = require('../models/game.js');

const games = [
    new Game({
        name: 'The Witcher 3: Wild Hunt',
        developer_name: 'CD Projekt RED',
        description: 'An open world action RPG',
        genre: 'Action RPG'
    })
]

module.exports = games;