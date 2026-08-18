const db = require("../utils/dbConnections");

const addBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const query = `
        INSERT INTO Buses (busNumber, totalSeats, availableSeats)
        VALUES (?, ?, ?)
    `;

    db.execute(query, [busNumber, totalSeats, availableSeats], (err, result) => {
        if (err) {
            console.log("Insert bus error:", err.message);
            return res.status(500).send(err.message);
        }

        console.log(`Bus inserted: ${busNumber}`);

        res.status(201).send("Bus added successfully");
    });
};

const getAvailableBuses = (req, res) => {
    const seats = req.params.seats;

    const query = `
        SELECT *
        FROM Buses
        WHERE availableSeats > ?
    `;

    db.execute(query, [seats], (err, result) => {
        if (err) {
            console.log("Fetch bus error:", err.message);
            return res.status(500).send(err.message);
        }

        console.log(`Buses with more than ${seats} available seats retrieved`);

        res.status(200).json(result);
    });
};

module.exports = {
    addBus,
    getAvailableBuses
};