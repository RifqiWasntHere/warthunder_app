const { TankShells } = require("../models");

class tankShellControllers {
  static async addTankShell(req, res, next) {
    try {
      const { turretId, shellId } = req.body;
      let addTankShell = await TankShells.create({ turretId, shellId });
      res.status(201).json({ status: "Tank shells successfully added." });
    } catch (err) {
      next(err);
    }
  }
}
