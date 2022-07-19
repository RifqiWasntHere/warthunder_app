const express = require("express");
const router = express.Router();

const turretControllers = require("../controllers/turretControllers");

router.post("/addTurret", turretControllers.addTurret);

module.exports = router;
