const { Penetrations } = require("../models");

class penetrationControllers {
  static async addPenetration(req, res, next) {
    try {
      const { description } = req.body;
      let addPenetration = await Penetrations.create({ description });
      res.status(201).json({ status: "Penetration data successfully added." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = penetrationControllers;
