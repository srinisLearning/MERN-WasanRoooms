const express = require("express");
const router = express.Router();
const Room = require("../models/roomModel");

router.get("/getAllRooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    //res.json(rooms);
    res.send(rooms);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
