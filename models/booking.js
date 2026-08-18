const { DataTypes } = require("sequelize");
const sequelize = require("../utils/dbConnections");

const Bookings = sequelize.define("Bookings", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Bookings;