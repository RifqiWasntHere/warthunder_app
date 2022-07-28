const express = require("express");
const router = express.Router();

const shellControllers = require("../controllers/shellControllers");

router.get("/", shellControllers.shellList);

router.post("/add", shellControllers.addShell);

router.patch("/edit", shellControllers.updateShell);

module.exports = router;
