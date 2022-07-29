const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

const countryRoutes = require("./countries");
const featureRoutes = require("./features");
const penetrationRoutes = require("./penetrations");
const shellRoutes = require("./shells");
const tankRoutes = require("./tanks");
const turretRoutes = require("./turrets");
const firepowerRoutes = require("./firepowers");
const tankFeatureRoutes = require("./tankfeatures");
const tankShellRoutes = require("./tankshells");
const userCountryRoutes = require("./usercountries");
const userTankRoutes = require("./usertanks");
const errorHandler = require("./errorHandler");

router.post("/register", userControllers.register);

router.use("/country", countryRoutes);

router.use("/turret", turretRoutes);

router.use("/shell", shellRoutes);

router.use("/feature", featureRoutes);

router.use("/tank", tankRoutes);

router.use("/penetration", penetrationRoutes);

router.use("/firepower", firepowerRoutes);

router.use("/tankFeature", tankFeatureRoutes);

router.use("/tankShell", tankShellRoutes);

router.use("/userCountry", userCountryRoutes);

router.use("/userTank", userTankRoutes);

router.use(errorHandler);
module.exports = router;
