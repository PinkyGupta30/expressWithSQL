const db = require("../utils/dbConnections");

const addUser = (req, res) => {
    const { name, email } = req.body;

    const query = "INSERT INTO Users (name, email) VALUES (?, ?)";

    db.execute(query, [name, email], (err, result) => {
        if (err) {
            console.log("Insert error:", err.message);
            return res.status(500).send(err.message);
        }

        console.log(`User inserted: ${name}, ${email}`);

        res.status(201).send("User added successfully");
    });
};

const getUsers = (req, res) => {
    const query = "SELECT * FROM Users";

    db.execute(query, (err, result) => {
        if (err) {
            console.log("Fetch error:", err.message);
            return res.status(500).send(err.message);
        }

        console.log("Users retrieved");
        res.status(200).json(result);
    });
};

module.exports = {
    addUser,
    getUsers
};