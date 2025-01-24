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
      //console.log(room);
    } else {
      res.status(404).json({ error: "Room not found" });
    }
  } else {
    res.status(400).json({ error: "Invalid room ID" });
  }
});

router.post("/addRoom", async (req, res) => {
  const {
    name,
    city,
    imageurl,
    phonenumber,
    email,
    website,
    rentperday,
    description,
  } = req.body;

  try {
    const room = new Room({
      name,
      city,
      imageurl,
      email,
      phonenumber,
      website,
      rentperday,
      description,
    });

    const createdRoom = await room.save();
    res.status(201).json(createdRoom);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
