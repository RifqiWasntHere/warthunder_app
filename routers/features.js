const express = require("express");
const router = express.Router();

const featureControllers = require("../controllers/featureControllers");

router.post("/addFeature", Controllers.addFeature);

module.exports = router;
