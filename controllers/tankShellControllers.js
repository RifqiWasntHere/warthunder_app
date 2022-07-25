const { TankShells } = require("../models");

class tankShellControllers {
  static async addTankShell(req, res, next) {
    try {
      const { tankId, shellId } = req.body;
      let addTankShell = await TankShells.create({ tankId, shellId });
      res.status(201).json({ status: "Tank shells successfully added." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = tankShellControllers;
