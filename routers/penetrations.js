const express = require("express");
const router = express.Router();

const penetrationControllers = require("../controllers/penetrationControllers");

router.post("/add", penetrationControllers.addPenetration);

router.patch("/edit", penetrationControllers.updatePenetration);

module.exports = router;
