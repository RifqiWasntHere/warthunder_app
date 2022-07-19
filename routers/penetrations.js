const express = require("express");
const router = express.Router();

const penetrationControllers = require("../controllers/penetrationControllers");

router.post("/addPenetration", penetrationControllers.addPenetration);

module.exports = router;
