const express = require("express");
const router = express.Router();

const tankShellControllers = require("../controllers/tankShellControllers");

router.post("/addTankShell", tankShellControllers.addTankShell);

module.exports = router;
