const User = require('../models/user.js');

const users = [
    new User({
        username: 'u',
        favoriteArcadeGames: [],
        email: 'e',
        password: '$2a$10$O2vh1xjxImurP6hO7NISVunp4oOjQzKDSX41caiGiI4dsr7pXvtjq' // 123456
    })
]

module.exports = users;