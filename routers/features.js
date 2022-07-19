const express = require("express");
const router = express.Router();

const featureControllers = require("../controllers/featureControllers");

router.post("/addFeature", featureControllers.addFeature);

module.exports = router;
