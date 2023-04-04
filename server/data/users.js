const User = require('../models/user.js');

const users = [
    new User({
        username: 'golgedar',
        favoriteGames: [],
        password: 'mysecretpassword'
    })
]

module.exports = users;