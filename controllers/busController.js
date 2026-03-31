const connection = require("../utils/db_connection");

const addNewBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const insertQuery = `
        INSERT INTO Buses(busNumber, totalSeats, availableSeats)
        VALUES(?,?,?)
    `
    connection.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        } else {
            console.log("New bus inserted");
            res.status(200).send(`busNumber:${busNumber}, totalSeats:${totalSeats}, abvailableSeats:${availableSeats} inserted`);
        }
    })
}

const getBuses = (req, res) => {
    const getQuery = `
        SELECT * FROM Buses
        WHERE availableSeats > 10;
    `;
    connection.execute(getQuery, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        } else {
            res.status(200).json({
                message: "buses fetched successfully",
                data: result
            });
        }
    })
}

module.exports = {
    addNewBus,
    getBuses,
}