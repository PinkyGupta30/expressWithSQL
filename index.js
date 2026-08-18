const express = require("express");

const db = require("./utils/dbConnections");

require("./models/students");
require("./models/users");
require("./models/buses");
require("./models/booking");
require("./models/payment");

const sequelizeStudentRoutes =
    require("./routes/sequelizeStudentRoutes");

const userSequelizeRoutes =
    require("./routes/userSequelizeRoutes");

const busSequelizeRoutes =
    require("./routes/busSequelizeRoutes");

const app = express();

app.use(express.json());

app.use("/sequelize-students", sequelizeStudentRoutes);

app.use("/users", userSequelizeRoutes);

app.use("/buses", busSequelizeRoutes);

db.sync()
    .then(() => {
        console.log("Database synchronized");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.log(err);
    });