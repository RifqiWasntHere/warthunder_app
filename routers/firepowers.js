const express = require("express");
const router = express.Router();

const firepowerControllers = require("../controllers/firepowerControllers");

router.get("/", firepowerControllers.firepowerList);

router.post("/add", firepowerControllers.addFirepower);

module.exports = router;
