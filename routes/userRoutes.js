const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController")

routes.post("/", userController.addNewUser);
routes.get("/", userController.getUser);
routes.get("/:id/bookings", userController.getAllBookingsByUserId);


module.exports = routes;
