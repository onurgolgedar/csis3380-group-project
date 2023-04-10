const Game = require('../models/game.js');

const games = [
    new Game({
        name: 'Pong Pong',
        gameCode: 1,
        developer_name: 'User 1234',
        description: '"Pong Pong" is a simple arcade-style game that is similar to the classic game of Pong. The game features two paddles and a ball bouncing back and forth between them. The objective of the game is to hit the ball with your paddle and make it pass your opponents paddle to score points.',
        genre: 'Action RPG',
        released: '04/06/2023',
        background_image: "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        custom_url: null
    }),

    new Game({
        name: 'AllThreesDomino',
        gameCode: 99,
        developer_name: 'html5games.com',
        description: 'Number of dominoes drawn: Players draw 5 tiles from the stock regardless of the number of players. The tiles not drawn are pushed to one side to make up the boneyard.',
        genre: 'Board Game',
        released: '01/04/2010',
        background_image: "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        custom_url: 'https://cdn.htmlgames.com/AllThreesDomino/'
    })
]

module.exports = games;