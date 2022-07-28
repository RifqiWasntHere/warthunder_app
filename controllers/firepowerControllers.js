const { Firepowers } = require("../models");

class firepowerControllers {
  static async addFirepower(req, res, next) {
    try {
      const { turretId, shellId, penetrationId } = req.body;
      let addFirepower = await Firepowers.create({
        turretId,
        shellId,
        penetrationId,
      });
      res.status(201).json({ status: "firepower successfully added." });
    } catch (err) {
      next(err);
    }
  }
  static async firepowerList(req, res, next) {
    try {
      let firepowerList = await Firepowers.findAll({ raw: true });
      res.status(200).json(firepowerList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = firepowerControllers;
