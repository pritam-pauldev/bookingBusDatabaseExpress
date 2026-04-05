const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connection");
const Booking = require("../models/bookings");
const User = require("../models/users");
const Bus = require("../models/buses");

const addNewBooking = async (req, res) => {
  try {
    const { seatNumber, userId, busId } = req.body;
    Booking.create({
      seatNumber: seatNumber,
      UserId: userId,
      BusId: busId,
    });
    console.log(
      `"seatNumber": ${seatNumber}, "UserId": ${userId}, "BusId": ${busId}`,
    );
    res.status(202).json({
      seatNumber: seatNumber,
      UserId: userId,
      BusId: busId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
    addNewBooking
};
