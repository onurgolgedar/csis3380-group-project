require("dotenv").config({ path: "./config.env" });
const databaseOperations = require("./db.js");
const express = require("express");
const cors = require("cors");
const session = require("express-session");

const userRouter = require("./routers/user-router.js");
const gameRouter = require("./routers/game-router.js");
const gameReviewRouter = require("./routers/gameReview-router.js");

const app = express();

app.use(cors());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(express.json());

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
