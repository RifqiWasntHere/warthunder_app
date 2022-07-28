const { Penetrations } = require("../models");

class penetrationControllers {
  static async addPenetration(req, res, next) {
    try {
      let addPenetration = await Penetrations.create({
        description: req.body.description,
      });
      res.status(201).json({ status: "Penetration data successfully added." });
    } catch (err) {
      next(err);
    }
  }
  static async updatePenetration(req, res, next) {
    try {
      const { description, targetId } = req.body;
      let updatePenetration = await Penetrations.update(
        { description },
        { where: { id: targetId } }
      );
      res
        .status(201)
        .json({ status: "Penetration data successfully updated." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = penetrationControllers;
