const { Op } = require("sequelize");
const Buses = require("../models/buses");
const Users = require("../models/users");
const Booking = require("../models/bookings");

const addNewBus = async (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  try {
    await Buses.create({
      busNumber: busNumber,
      totalSeats: totalSeats,
      availableSeats: availableSeats,
    });
    console.log(
      `busNumber: ${busNumber}, totalSeats: ${totalSeats}, availableSeats: ${availableSeats}`,
    );
    res
      .status(201)
      .send(
        `busNumber: ${busNumber}, totalSeats: ${totalSeats}, availableSeats: ${availableSeats}`,
      );
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getBuses = async (req, res) => {
  try {
    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: 10,
        },
      },
    });
    console.log("Get All Buses details");
    const result = buses.map((b) => b.toJSON());
    res.status(200).json({
      message: "All Bus details fetched",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getAllBooingsByBusId = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await Booking.findAll({
      where: {
        busId: id,
      },
      include: Users,
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
  addNewBus,
  getBuses,
  getAllBooingsByBusId,
};
