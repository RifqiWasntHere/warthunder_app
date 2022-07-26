const express = require("express");
const router = express.Router();

const tankFeatureControllers = require("../controllers/tankFeatureControllers");

router.post("/add", tankFeatureControllers.addTankFeature);

module.exports = router;
