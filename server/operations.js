const mongoose = require('mongoose');
const Game = require('./models/game.js');
const GameReview = require('./models/gameReview.js');
const User = require('./models/user.js');
const Games = require('./data/games.js');
const GameReviews = require('./data/gameReviews.js');
const Users = require('./data/users.js');

async function connectMongoose(connectionString) {
    var connectionPromise = mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('error', (err) => { console.log('(Error) Mongoose -> Could not connect: ', err); });
    mongoose.connection.on('disconnected', () => { console.log('(Error) Mongoose -> Connection Lost'); });
    mongoose.connection.on('connected', () => { console.log('Mongoose -> Connection Created'); });

    return connectionPromise;
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

async function initializeDB() {
    console.log("DB initialization has been started.");

    await dropCollection('games',);
    await dropCollection('users');
    await dropCollection('gamereviews');

    Users.map(item => async function () {
        await insertDocument(item);
    }());
}

async function insertDocument(document, documentName = 'Unnamed Document') {
    User.create(document).then(function () {
        console.log(`Mongoose -> A New Document Added (${documentName})`);
    }).catch(function (error) {
        console.log(`(Error )Mongoose -> Document could not be added. (${document}) ${error}`);
    });
}

module.exports = { insertDocument, initializeDB, dropCollection, connectMongoose };