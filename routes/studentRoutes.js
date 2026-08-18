const express = require("express");
const router = express.Router();

const studentController = require("../controller/studentController");

router.post("/", studentController.addEntries);

router.put("/:id", studentController.updateEntry);

router.delete("/:id", studentController.deleteEntry);

module.exports = router;