const express = require("express");
const router = express.Router();
const Room = require("../models/roomModel");
const mongoose = require("mongoose");

router.get("/getAllRooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    //res.json(rooms);
    res.send(rooms);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/getRoomById/:id", async (req, res) => {
  const roomId = req.params.id;
  if (mongoose.Types.ObjectId.isValid(roomId)) {
    const room = await Room.findById(roomId);
    if (room) {
      res.json(room);
      console.log(room);
    } else {
      res.status(404).json({ error: "Room not found" });
    }
  } else {
    res.status(400).json({ error: "Invalid room ID" });
  }
});

module.exports = router;
