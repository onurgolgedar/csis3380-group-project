const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');
const User = require("./models/user.js");

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({ email });
    if (user == null) {
      return done(null, false, { message: 'Wrong Email' })
    }
    try {
    const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Wrong Password' })
      }
    } catch (e) {
      return done(e)
    }
  }
  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user._id))
  passport.deserializeUser((id, done) => {
    // console.log("DESEREALIZE FUNCTION");
    return done(null, id)
  })
}

module.exports = initialize
