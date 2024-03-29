require("dotenv").config({ path: "./config.env" });
const databaseOperations = require("./db.js");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);
const path = require("path");

const userRouter = require("./routers/user-router.js");
const gameRouter = require("./routers/game-router.js");
const gameReviewRouter = require("./routers/gameReview-router.js");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.set("trust proxy", 1);

const store = new MongoDBStore({
  uri: `mongodb+srv://group7:${process.env.DB_MONGODB_PASSWORD}@csis3380-group-project.vgzocak.mongodb.net/DB1`,
  collection: 'mySessions'
});

store.on('error', function(error) {
  console.log(error);
});

app.use(session({
  secret: process.env.COOKIE_SECRET_KEY,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: 'none',
    secure:true
  },
  store: store,
  resave: false,
  saveUninitialized: false
}));

app.use("/public", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log();
  console.log(`[REQUEST] ${req.method}`);
  console.log(`Path: ${req.path}`);
  if (req.method != "GET") console.log(`Body: ${JSON.stringify(req.body)}`);
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
