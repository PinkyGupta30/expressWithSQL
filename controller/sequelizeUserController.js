const Users = require("../models/users");

const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await Users.create({
            name,
            email
        });

        console.log("User created:", user.id);

        res.status(201).json(user);
    } catch (err) {
        console.log("User insert error:", err.message);
        res.status(500).send(err.message);
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();

        res.status(200).json(users);
    } catch (err) {
        console.log("Fetch users error:", err.message);
        res.status(500).send(err.message);
    }
};

module.exports = {
    addUser,
    getUsers
};