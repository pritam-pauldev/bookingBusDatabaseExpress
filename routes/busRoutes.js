const express = require("express");
const routes = express.Router();
const busController = require("../controllers/busController");

routes.post("/", busController.addNewBus);
routes.get("/available", busController.getBuses);
routes.get("/:id/bookings", busController.getAllBooingsByBusId);

module.exports = routes;
