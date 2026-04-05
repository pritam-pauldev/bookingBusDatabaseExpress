const { Sequelize, DataTypes } = require("sequelize");
const Users = require("../models/users");
const Booking = require("../models/bookings");
const Bus = require("../models/buses");

let addNewUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    await Users.create({
      name: name,
      email: email,
    });
    console.log("New user inserted");
    res.status(201).send(`name:${name} email:${email} inserted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getUser = async (req, res) => {
  try {
    const users = await Users.findAll();
    const result = users.map((u) => u.toJSON());
    console.log("All users fetched");
    res.status(200).json({
      message: "Users fetched successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getAllBookingsByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await Booking.findAll({
      where: {
        userId: id,
      },
      include: Bus,
    });
    console.log(booking);
    res.status(200).json(booking);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addNewUser,
  getUser,
  getAllBookingsByUserId,
};
