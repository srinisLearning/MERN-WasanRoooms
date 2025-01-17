const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Booking = require("../models/bookingModel");
router.post("/bookRoom", async (req, res) => {
  const {
    roomName,
    roomid,
    userid,
    userName,
    fromdate,
    todate,
    totalDays,
    totalAmount,
    transactionId,
  } = req.body;
  try {
    const booking = new Booking({
      roomName,
      roomid,
      userid,
      userName,
      fromdate,
      todate,
      totalDays,
      totalAmount,
      transactionId: "2345",
    });
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
