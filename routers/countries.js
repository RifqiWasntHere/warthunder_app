const express = require("express");
const router = express.Router();

const countryControllers = require("../controllers/countryControllers");

router.get("/", countryControllers.countryList);

router.post("/add", countryControllers.addCountry);

router.patch("/edit", countryControllers.updateCountry);

module.exports = router;
