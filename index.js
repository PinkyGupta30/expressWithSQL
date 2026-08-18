const express = require("express");
const db = require("./utils/dbConnections");
const studentRoutes = require("./routes/studentRoutes");
const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.use("/users", userRoutes);

// const busRoutes = require("./routes/busRoutes");
// app.use("/buses", busRoutes);

app.use("/students", studentRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});