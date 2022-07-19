const express = require("express");
const router = express.Router();

const tankControllers = require("../controllers/tankControllers");

router.post("/addTank", tankControllers.addTank);

module.exports = router;
