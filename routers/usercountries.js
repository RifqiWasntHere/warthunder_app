const express = require("express");
const router = express.Router();

const userCountryControllers = require("../controllers/userCountryControllers");

router.post("/addUserCountry", userCountryControllers.addUserCountry);

module.exports = router;
