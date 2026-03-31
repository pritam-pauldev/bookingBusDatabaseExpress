const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "PRIyaNPRIya",
  database: "bookingBus",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    connection.end;
    return;
  } else {
    console.log("Database Connected");
    const createUserTable = `CREATE TABLE IF NOT EXISTS Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(50)
        )`;
    const createBusTable = `CREATE TABLE IF NOT EXISTS Buses(
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber INT,
        totalSeats INT,
        availableSeats INT
    )`;
    const createBookingTable = `CREATE TABLE IF NOT EXISTS Bookings(
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
    )`;
    const createPaymentTable = `CREATE TABLE IF NOT EXISTS Payments(
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid INT,
        paymentStatus VARCHAR(255)
    )`;
    connection.execute(createUserTable, (err) => {
      if (err) {
        console.log(err);
        connection.end();
        return;
      } else {
        console.log("User table created");
      }
    });
    connection.execute(createBusTable, (err) => {
      if (err) {
        console.log(err);
        connection.end();
        return;
      } else {
        console.log("Bus table is created");
      }
    });
    connection.execute(createBookingTable, (err) => {
      if (err) {
        console.log(err);
        connection.end();
        return;
      } else {
        console.log("Booking table created");
      }
    });
    connection.execute(createPaymentTable, (err) => {
      if (err) {
        console.log(err);
        connection.end();
        return;
      } else {
        console.log("Payment table created");
      }
    });
  }
});

module.exports = connection;
