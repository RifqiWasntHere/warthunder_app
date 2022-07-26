const express = require("express");
const router = express.Router();

const featureControllers = require("../controllers/featureControllers");

router.get("/", featureControllers.featureList);

router.post("/add", featureControllers.addFeature);

module.exports = router;
