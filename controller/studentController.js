const db = require("../utils/dbConnections");

// CREATE
const addEntries = (req, res) => {
    const { name, email } = req.body;

    const insertQuery =
        "INSERT INTO students (name, email) VALUES (?, ?)";

    db.execute(insertQuery, [name, email], (err, result) => {
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
    const { name, email } = req.body;

    const updateQuery =
        "UPDATE students SET name = ?, email = ? WHERE id = ?";

    db.execute(updateQuery, [name, email, id], (err, result) => {
        if (err) {
            console.log("Update error:", err.message);
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0) {
            console.log(`Student with ID ${id} not found`);
            return res.status(404).send("Student not found");
        }

        console.log(`Student ${id} updated to: ${name}, ${email}`);

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


module.exports = {
    addEntries,
    updateEntry,
    deleteEntry
};