const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const busController = require("../controller/busController");

router.post("/", busController.addBus);
router.post("/", userController.addUser);
router.get("/", userController.getUsers);

module.exports = router;