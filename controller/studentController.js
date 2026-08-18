const db = require("../utils/dbConnections");

// CREATE
const addEntries = (req, res) => {
    const { name, email, age } = req.body;

    const insertQuery =
        "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";

    db.execute(insertQuery, [name, email, age], (err, result) => {
        if (err) {
            console.log("Insert error:", err.message);
            return res.status(500).send(err.message);
        }

        console.log(`Student inserted: ${name}, ${email}`);

        res.status(201).send(
            `Student with name ${name} successfully added`
        );
    });
};


// UPDATE
const updateEntry = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const updateQuery =
        "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?";

    db.execute(updateQuery, [name, email, age, id], (err, result) => {
        if (err) {
            console.log("Update error:", err.message);
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0) {
            console.log(`Student with ID ${id} not found`);
            return res.status(404).send("Student not found");
        }

        console.log(`Student ${id} updated to: ${name}, ${email}, ${age}`);

        res.status(200).send("Student updated successfully");
    });
};


// DELETE
const deleteEntry = (req, res) => {
    const { id } = req.params;

    const deleteQuery =
        "DELETE FROM students WHERE id = ?";

    db.execute(deleteQuery, [id], (err, result) => {
        if (err) {
            console.log("Delete error:", err.message);
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0) {
            console.log(`Student with ID ${id} not found`);
            return res.status(404).send("Student not found");
        }

        console.log(`Student ${id} deleted`);

        res.status(200).send("Student deleted successfully");
    });
};

const getStudents = (req, res) => {
    const query = "SELECT * FROM students";

    db.execute(query, (err, result) => {
        if (err) {
            console.log("Fetch error:", err.message);
            return res.status(500).send(err.message);
        }

        res.status(200).json(result);
    });
};

const getStudentById = (req, res) => {
    const { id } = req.params;

    const query = "SELECT * FROM students WHERE id = ?";

    db.execute(query, [id], (err, result) => {
        if (err) {
            console.log("Fetch error:", err.message);
            return res.status(500).send(err.message);
        }

        if (result.length === 0) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json(result[0]);
    });
};


module.exports = {
    addEntries,
    getStudents,
    getStudentById,
    updateEntry,
    deleteEntry
};