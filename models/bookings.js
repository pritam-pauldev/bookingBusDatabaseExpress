const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connection");

const Bookings = sequelize.define("Bookings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Bookings;
