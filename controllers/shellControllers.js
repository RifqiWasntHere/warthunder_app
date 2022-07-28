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
  static async updateShell(req, res, next) {
    try {
      const { shellName, shellDesc, shellScore, targetShell } = req.body;
      let updateShell = await Shells.update(
        { shellName, shellDesc, shellScore },
        { where: { shellName: targetShell } }
      );
      res.status(201).json({ status: "Shell successfully updated." });
    } catch (err) {
      next(err);
    }
  }
  static async shellList(req, res, next) {
    try {
      let shellList = await Shells.findAll({ raw: true });
      res.status(200).json(shellList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = shellControllers;
