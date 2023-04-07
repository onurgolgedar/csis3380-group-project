const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const router = express.Router();
const User = require("../models/user.js");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.get("/checklogin", async (req, res) => {
  console.log(req.session.userId);
  if (!req.session.userId) {
    return res.status(400).json({ error : "Not Logged In" });
  }

  console.log("CHECK LOG IN TEST");
  const user = await User.findById(req.session.userId);
  if (!user) {
    res.status(404).json({ error : "User not found" });
  } else {
    res
      .status(200)
      .json({ message: "Logged in", user, isLoggedIn: true });
  }
});

router.get("/:userId", async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  res.send(user);
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await createdUser.save();

    req.session.userId = createdUser;
    req.session.save();
    res.send(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ error: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ error: "Invalid password" });
    }

    req.session.userId = user._id;
    req.session.save();
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: "Error logging out" });
      } else {
        res.clearCookie("connect.sid");
        // res.redirect("/");
        res.status(200).json({ message: "Logged Out" });
      }
    });
  } else {
    res.end();
  }
});

router.delete("/deleteaccount", async (req, res) => {
  try {
    console.log("req.session.userId ", req.session.userId);
    const deletedUser = await User.findByIdAndDelete(req.session.userId);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
    } else {
      req.session.destroy((err) => {
        if (err) {
          console.log("Error destroying session:", err);
        }
      });
      res.clearCookie("connect.sid");
      res.json({ message: "Account deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
});
module.exports = router;
