const express = require("express");
const routes = express.Router();
const busController = require("../controllers/busController");

routes.post("/", busController.addNewBus);
routes.get("/available", busController.getBuses);

module.exports = routes;
