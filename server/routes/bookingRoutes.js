const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const stripe = require("stripe")(
  "sk_test_51LFsZzSJDYv42pi4PgqgPXWjYryZsW5BDbwxUVvDyqC3060YVhqNTiYylfI1VtxdMGMRMkuTF5UBHPcHYXRz1Uyj00Gq04QKZV"
);
const Booking = require("../models/bookingModel");
//console.log(uuidv4());
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
    token,
  } = req.body;

  try {
    /*   const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
     const payment = await stripe.charges.create(
      {
        amount: totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    ); */
    payment = true;
    if (payment) {
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
      console.log("Payment", payment);
      res.send("Payment Successfull and Room Booked");
    }
  } catch (error) {
    console.log("Error", error);
    res.status(400).send("Payment Failed");
  }
});

module.exports = router;
