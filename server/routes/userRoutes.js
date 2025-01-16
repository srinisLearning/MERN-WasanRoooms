const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const newUser = new User({ name, email, mobile, password });
  //console.log(newUser);

  try {
    newUser.save();
    res.send("User Registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      console.log("User Logged in successfully");
      const loggedInUser = {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      return res.send(loggedInUser);
    } else {
      console.log("Invalid Credentials");
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });

    res.send("User Logged in successfully");
  }
});

module.exports = router;
