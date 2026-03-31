const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController")

routes.post("/", userController.addNewUser);
routes.get("/", userController.getUser);


module.exports = routes;
