const express = require("express");
const router = express.Router();

const turretControllers = require("../controllers/turretControllers");

router.get("/", turretControllers.turretList);

router.post("/addt", turretControllers.addTurret);

module.exports = router;
