const express = require("express");
const router = express.Router();

const shellControllers = require("../controllers/shellControllers");

router.post("/addShell", shellControllers.addShell);

module.exports = router;
