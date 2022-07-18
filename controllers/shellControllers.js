const { Shells } = require("../models");

class shellControllers {
  static async addShell(req, res, next) {
    try {
      const { shellName, shellDesc, shellScore } = req.body;
      let addShell = await Shells.create({ shellName, shellDesc, shellScore });
      res.status(201).json({ status: "Shell successfully added." });
    } catch (err) {
      next(err);
    }
  }
}
