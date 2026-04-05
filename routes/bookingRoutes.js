const express = require("express");
const controller = require("../controllers/bookingController");
const route = express.Router();
route.post("/", controller.addNewBooking);

module.exports = route;