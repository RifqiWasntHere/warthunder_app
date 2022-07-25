const express = require("express");
const router = express.Router();

const userTankController = require("../controllers/userTankControllers");

router.post("/addUserTank", userTankController.addUserTank);

module.exports = router;
