const Game = require("../models/game.js");

const games = [
  new Game({
    name: "Pong Pong",
    gameCode: 1,
    developer_name: "User 1234",
    description:
      '"Pong Pong" is a simple arcade-style game that is similar to the classic game of Pong. The game features two paddles and a ball bouncing back and forth between them. The objective of the game is to hit the ball with your paddle and make it pass your opponents paddle to score points.',
    genre: "Classic",
    released: "04/06/2023",
    background_image:
      "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    custom_url: null,
  }),
  new Game({
    name: "All Threes Domino",
    gameCode: 99,
    developer_name: "html5games.com",
    description:
      "Number of dominoes drawn: Players draw 5 tiles from the stock regardless of the number of players. The tiles not drawn are pushed to one side to make up the boneyard.",
    genre: "Board",
    released: "01/04/2010",
    background_image:
      "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    custom_url: "https://cdn.htmlgames.com/AllThreesDomino/",
  }),
  new Game({
    name: "Daily Kakurasu",
    gameCode: 98,
    developer_name: "html5games.com",
    description:
      "Daily Kakurasu puzzles in different sizes. Mark squares and add up the numbers of the marked squares to the numbers on the right and bottom of the grid.",
    genre: "Board",
    released: "02/05/2012",
    background_image:
      "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    custom_url: "https://cdn.htmlgames.com/DailyKakurasu/",
  }),
  new Game({
    name: "Spite and Malice Extreme",
    gameCode: 97,
    developer_name: "html5games.com",
    description:
      "The object of this game is to get rid of your stack of cards on the left by placing them on the 3 centre stacks. The first card on the centre stack needs to be an Ace and then you can place cards upwards to a Queen (A-2-3-4-5-6-7-8-9-10-J-Q and suits are irrelevant). You can play cards from your stack at the left, your hand (middle 5 cards) or your 4 discard piles (on the right). Your turn ends when you place a card from your hand to 1 of the discard piles. Only the top card of your play stack, your hand cards and the top cards of the discard piles are available for play. The King is wild and can be used for any value. In this extreme variant you are allowed to use the discard pile cards of your opponent.",
    genre: "Card",
    released: "06/03/2011",
    background_image:
      "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    custom_url: "https://cdn.htmlgames.com/SpiteAndMaliceExtreme/",
  }),
  new Game({
    name: "Hidden Spots - Indonesia",
    gameCode: 96,
    developer_name: "html5games.com",
    description:
      "Find all the hidden spots on the images from Indonesia. Click on the image where you have spotted a hidden spot.",
    genre: "Detective",
    released: "02/09/2015",
    background_image:
      "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    custom_url: "https://cdn.htmlgames.com/HiddenSpotsIndonesia/",
  }),
  new Game({
    name: "Feed The Animals",
    gameCode: 95,
    developer_name: "html5games.com",
    description:
      "Connect animals and their food. Connect the animal with the right food, you can only connect if the connecting path has no more than two changes of direction.",
    genre: "Casual",
    released: "16/06/2013",
    background_image:
      "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    custom_url: "https://cdn.htmlgames.com/FeedTheAnimals/",
  }),
  new Game({
    name: "Ace of Spades",
    gameCode: 94,
    developer_name: "html5games.com",
    description:
      "Fun tripeaks game with 50 different levels. Play cards that are 1 higher or 1 lower in value then the open card (bottom right). Click on the closed stack to get a new open card. Remove all cards.",
    genre: "Card",
    released: "10/07/2017",
    background_image:
      "https://images.unsplash.com/photo-1558433916-90a36b44753f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    custom_url: "https://cdn.htmlgames.com/AceOfSpades/",
  })
];

module.exports = games;
