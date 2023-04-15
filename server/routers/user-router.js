const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/user.js");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const users = await User.find({});
  return res.send(users);
});

router.get("/checklogin", async (req, res) => {
  const mongoStore = req.sessionStore;
  const sessionId = req.sessionID;

  mongoStore.get(sessionId, (err, session) => {
    if (err) throw err;

    const user = session.userId;
    // res.render('dashboard', { user });
    return res
    .status(200)
    .json({ message: "Logged in", user, isLoggedIn: true });
  });


  if (!req.session.userId) {
    console.log(
      "Error -> User is not logged in (Session userID: " +
        req.user +
        ")"
    );
    return res.json({ isLoggedIn: false, session: req.session });
  }

  const user = await User.findById(req.session.userId);
  if (!user) {
    console.log("Error -> User could not be found.");
    return res.status(404).json({ error: "User could not be found." });
  } else {
    console.log("Success -> Session UserID: " + req.user);
    return res
      .status(200)
      .json({ message: "Logged in", user, isLoggedIn: true });
  }
});

router.get("/:username", async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  return res.send(user);
});

router.post(
  "/register",
  [
    check("username").notEmpty().withMessage("Username is required"),
    check("email")
      .isEmail()
      .withMessage("Invalid email address, check the format"),
    check("password")
      .isLength({ min: 7 })
      .withMessage("Password should be at least 7 characters long"),
  ],
  async (req, res) => {
    try {
      const all_errors = validationResult(req);
      if (!all_errors.isEmpty()) {
        console.log("ERRORS ARRAY: ", all_errors.array());
        return res.send({ error: all_errors.array() });
      }

      const { username, email, password } = req.body;

      const user = await User.findOne({ email });
      if (user)
        return res.send({ error: [{ msg: "User already exists." }] });

      const hashedPassword = await bcrypt.hash(password, 10);

      const createdUser = new User({
        username,
        email,
        favoriteArcadeGames: [],
        password: hashedPassword,
      });
      await createdUser.save();

      // req.session.userId = createdUser;

      return res.send(createdUser);
    } catch (err) {
      console.log("Error -> " + err);
      return res.status(500).json({ error: [{ msg: "Internal Error" }] });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      console.log("Error -> Invalid Email Address");
      return res.status(400).json({ error: "Invalid Email Address" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Error -> Invalid Password");
      return res.status(400).json({ error: "Invalid Password" });
    }

    req.session.userId = user._id;
    console.log("Success -> Session UserID: " + req.session.userId);

    return res.status(200).send(user);
  } catch (err) {
    console.log("Error -> " + err);
    return res.status(500).json({ error: "Internal Error" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err)
        return res.status(500).json({ error: "Internal Error" });
      else
        return res.status(200).json({ message: "Logged out succesfully." });
    });
  } else return res.end();
});

router.delete("/deleteaccount", async (req, res) => {
  try {
    console.log("Delete Account", req.user);
    const deletedUser = await User.findByIdAndDelete(req.user);

    if (!deletedUser) {
      console.log("Error -> User could not be found.");
      return res.status(404).json({ error: "User could not be found." });
    } else {
      req.session.destroy((err) => {
        if (err) {
          console.log("Error -> Session could not be destroyed: " + err);
          return res.status(500).json({ error: "Internal Error" });
        }
      });
      
      res.clearCookie("connect.sid");

      console.log("Success -> Account has been deleted");
      return res.json({ message: "Account has been deleted." });
    }
  } catch (err) {
    console.log("Error -> " + err);
    return res.status(500).json({ error: "Internal Error" });
  }
});

module.exports = router;
