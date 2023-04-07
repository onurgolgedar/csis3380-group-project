const {Game }= require('../models/game.js');

const games = [
    new Game({
        name: 'Pong Pong',
        developer_name: 'User 1234',
        description: '"Pong Pong" is a simple arcade-style game that is similar to the classic game of Pong. The game features two paddles and a ball bouncing back and forth between them. The objective of the game is to hit the ball with your paddle and make it pass your opponents paddle to score points.',
        genre: 'Action RPG',
        released: "04/06/2023",
        background_image: "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    })
]

module.exports = games;