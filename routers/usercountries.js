const express = require("express");
const router = express.Router();

const userCountryControllers = require("../controllers/userCountryControllers");

router.post("/add", userCountryControllers.addUserCountry);

module.exports = router;
