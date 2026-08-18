const students = require("../models/students");

const addStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const student = await students.create({
            name,
            email,
            age
        });

        console.log("Student inserted:", student.id);

        res.status(201).json(student);
    } catch (err) {
        console.log("Insert error:", err.message);
        res.status(500).send(err.message);
    }
};

const getStudents = async (req, res) => {
    try {
        const studentsData = await students.findAll();

        res.status(200).json(studentsData);
    } catch (err) {
        console.log("Fetch error:", err.message);
        res.status(500).send(err.message);
    }
};

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await students.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json(student);
    } catch (err) {
        console.log("Fetch error:", err.message);
        res.status(500).send(err.message);
    }
};


const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const student = await students.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found");
        }

        await student.update({
            name,
            email,
            age
        });

        console.log("Student updated:", id);

        res.status(200).json(student);
    } catch (err) {
        console.log("Update error:", err.message);
        res.status(500).send(err.message);
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await students.findByPk(id);

        if (!student) {
            return res.status(404).send("Student not found");
        }

        await student.destroy();

        console.log("Student deleted:", id);

        res.status(200).send("Student deleted successfully");
    } catch (err) {
        console.log("Delete error:", err.message);
        res.status(500).send(err.message);
    }
};


module.exports = {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};