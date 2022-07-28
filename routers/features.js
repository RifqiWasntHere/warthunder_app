const express = require("express");
const router = express.Router();

const featureControllers = require("../controllers/featureControllers");

router.get("/", featureControllers.featureList);

router.post("/add", featureControllers.addFeature);

router.patch("/edit", featureControllers.updateFeature);

module.exports = router;
