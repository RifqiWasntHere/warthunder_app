const express = require("express");
const router = express.Router();

const countryControllers = require("../controllers/countryControllers");

router.post("/addCountry", Controllers.addCountry);

module.exports = router;
