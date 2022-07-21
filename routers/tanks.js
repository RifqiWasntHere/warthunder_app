const express = require("express");
const router = express.Router();

const tankControllers = require("../controllers/tankControllers");

router.get("/", tankControllers.tankList);

router.post("/addTank", tankControllers.addTank);

module.exports = router;
