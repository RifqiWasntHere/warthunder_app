const express = require("express");
const router = express.Router();

const tankControllers = require("../controllers/tankControllers");

router.get("/", tankControllers.tankList);

router.post("/add", tankControllers.addTank);

router.patch("/edit", tankControllers.updateTank);

module.exports = router;
