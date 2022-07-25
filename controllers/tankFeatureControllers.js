const { TankFeatures } = require("../models");

class tankFeatureControllers {
  static async addTankFeature(req, res, next) {
    try {
      const { tankId, featureId } = req.body;
      let addTankFeature = await TankFeatures.create({ tankId, featureId });
      res.status(201).json({ status: "Tank features successfully added." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = tankFeatureControllers;
