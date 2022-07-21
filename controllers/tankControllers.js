const { Tanks } = require("../models");

class tankControllers {
  static async addTank(req, res, next) {
    try {
      const { tankName, turretId, armorScore, engine, countryId } = req.body;
      let addTank = await Tanks.create({
        tankName,
        turretId,
        armorScore,
        engine,
        countryId,
      });
      res.status(201).json({ status: "Tank successfully added." });
    } catch (err) {
      next(err);
    }
  }
  static async tankList(req, res, next) {
    try {
      let tankList = await Tanks.findAll({ raw: true });
      res.status(200).json(tankList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = tankControllers;
