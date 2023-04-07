const User = require('../models/user.js');

const users = [
    new User({
        username: 'golgedar',
        favoriteArcadeGames: [],
        email: 'test123123@gmail.com',
        password: 'mysecretpassword'
    })
]

module.exports = users;