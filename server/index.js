require("dotenv").config({ path: "./config.env" });
const databaseOperations = require("./db.js");
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require('passport');
const flash = require('express-flash');
const bodyParser = require('body-parser');

const userRouter = require("./routers/user-router.js");
const gameRouter = require("./routers/game-router.js");
const gameReviewRouter = require("./routers/gameReview-router.js");
const path = require("path");

const cookieParser = require('cookie-parser');

const initializePassport = require('./config')
initializePassport(
  passport
)

app.use(cors(
  {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
));
app.use(express.json());
app.use(flash());

app.use(cookieParser());
app.use(session({
  secret: process.env.COOKIE_SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: true
  } 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log();
  console.log(`[REQUEST] ${req.method} `);
  console.log(`Path: ${req.path}`);
  if (req.method != "GET")
    console.log(`Body: ${JSON.stringify(req.body)}`);
  next();
});
app.use("/api/users/", userRouter);
app.use("/api/games/", gameRouter);
app.use("/api/gamereviews/", gameReviewRouter);

databaseOperations
  .connectMongoose(
    `mongodb+srv://group7:${process.env.DB_MONGODB_PASSWORD}@csis3380-group-project.vgzocak.mongodb.net/DB1`
  )
  .then(() => databaseOperations.initializeDB());
app.listen(process.env.DB_PORT, () => {
  console.log(`Server is running on port: ${process.env.DB_PORT}`);
});
