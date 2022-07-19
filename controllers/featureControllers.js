const { Features } = require("../models");

class featureControllers {
  static async addFeature(req, res, next) {
    try {
      const { featureName, featureDesc, featureScore } = req.body;
      let addFeature = await Features.create({
        featureName,
        featureDesc,
        featureScore,
      });
      res.status(201).json({ status: "Feature successfully added." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = featureControllers;
