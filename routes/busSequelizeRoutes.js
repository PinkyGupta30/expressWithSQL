const express = require("express");
const router = express.Router();

const busController = require("../controller/sequelizeBusController");

router.post("/", busController.addBus);
router.get("/available/:seats", busController.getAvailableBuses);

module.exports = router;