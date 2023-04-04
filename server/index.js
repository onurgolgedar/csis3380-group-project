const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config({ path: './config.env' });;
const Game = require('./models/game.js');
const GameReview = require('./models/gameReview.js');
const User = require('./models/user.js');
const app = express();

const port = process.env.DB_PORT;
const api_uri = `mongodb+srv://group7:${process.env.DB_MONGODB_PASSWORD}@csis3380-group-project.vgzocak.mongodb.net/DB1`;

app.listen(port, () => { console.log(`Server is running on port: ${port}`); });

// Schemas
const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  developer_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
});
const gameReviewSchema = new mongoose.Schema({
  gameID: { type: String, required: true },
  user: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true }
});
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

connectMongoose();

const game = new Game({
  name: 'The Witcher 3: Wild Hunt',
  developer_name: 'CD Projekt RED',
  description: 'An open world action RPG',
  genre: 'Action RPG'
});

const gameReview = new GameReview({
  gameID: game._id,
  user: 'Onur Gölgedar',
  title: 'It is a perfect game!',
  text: 'The Witcher 3 has nice graphics, a good storyline, and interesting characters.'
});

const user = new User({
  username: 'golgedar',
  favoriteGames: [game._id],
  password: 'mysecretpassword'
});

Promise.all([game.save(), gameReview.save(), user.save()])
  .then(() => { console.log('Mongoose -> Insertion: Game, User, and GameReview have been inserted.'); })
  .catch((err) => { console.log('(Error) Mongoose -> Insertion: Game, User, and GameReview could NOT been inserted.', err); });

async function connectMongoose() {
  const mongooseConnection_promise = mongoose.connect(api_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on('error', (err) => { console.log('(Error) Mongoose -> Could not connect: ', err); });
  mongoose.connection.on('disconnected', () => { console.log('(Error) Mongoose -> Connection Lost'); });
  mongoose.connection.on('connected', () => { console.log('Mongoose -> Connection Started'); });

  const mongooseConnection = await mongooseConnection_promise;

  await dropCollection('games');
  await dropCollection('users');
  await dropCollection('gamereviews');

  return mongooseConnection;
}

async function dropCollection(collectionName) {
  _collection = mongoose.connection.collections[collectionName];
  if (_collection) {
    _collection.drop(function (err) {
      if (err) {
        console.log(`(Error) Mongoose -> Collection could not be dropped. (${collectionName})`, err);
      } else {
        console.log(`Mongoose -> Collection Dropped (${collectionName})`);
      }
    });
  }
}