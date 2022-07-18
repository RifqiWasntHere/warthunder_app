const { Turrets } = require("../models");

class turretControllers {
  static async addTurret(req, res, next) {
    try {
      const { turretName, turretScore } = req.body;
      let addTurret = await Turrets.create({ turretName, turretScore });
      res.status(201).json({ status: "Turret successfully added." });
    } catch (err) {
      next(err);
    }
  }
}
