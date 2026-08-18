const express = require("express");

const db = require("./utils/dbConnections");

require("./models/students");

const sequelizeStudentRoutes =
    require("./routes/sequelizeStudentRoutes");

const app = express();

app.use(express.json());

app.use("/sequelize-students", sequelizeStudentRoutes);

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