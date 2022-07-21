const express = require("express");
const router = express.Router();

const featureControllers = require("../controllers/featureControllers");

router.get("/", featureControllers.featureList);

router.post("/addFeature", featureControllers.addFeature);

module.exports = router;
