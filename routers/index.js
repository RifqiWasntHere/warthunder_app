const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");
const countryRoutes = require("./countries");
const featureRoutes = require("./features");
const penetrationRoutes = require("./penetrations");
const shellRoutes = require("./shells");
const tankRoutes = require("./tanks");
const turretRoutes = require("./turrets");

router.post("/register", userControllers.register);
router.use("/addCountry", countryRoutes);

module.exports = router;
