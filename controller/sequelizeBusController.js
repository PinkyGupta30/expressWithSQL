const Buses = require("../models/buses");
const { Op } = require("sequelize");

const addBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;

        const bus = await Buses.create({
            busNumber,
            totalSeats,
            availableSeats
        });

        console.log("Bus created:", bus.id);

        res.status(201).json(bus);
    } catch (err) {
        console.log("Bus insert error:", err.message);
        res.status(500).send(err.message);
    }
};

const getAvailableBuses = async (req, res) => {
    try {
        const { seats } = req.params;

        const buses = await Buses.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: Number(seats)
                }
            }
        });

        res.status(200).json(buses);
    } catch (err) {
        console.log("Fetch buses error:", err.message);
        res.status(500).send(err.message);
    }
};

module.exports = {
    addBus,
    getAvailableBuses
};