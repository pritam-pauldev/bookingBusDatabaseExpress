const express = require("express");
const db = require("./utils/db_connection");
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");
const app = express();

// import model
const Users = require("./models/users");
const Payments = require("./models/payments");
const Bookings = require("./models/bookings");
const Buses = require("./models/buses");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/buses", busRoutes);

db.sync()
  .then(() => {
    app.listen(3000, (err) => {
      console.log("Server is running in port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
