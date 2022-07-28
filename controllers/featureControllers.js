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
  static async updateFeature(req, res, next) {
    try {
      const { featureName, featureDesc, featureScore, targetFeature } =
        req.body;
      let updateFeature = await Features.update(
        {
          featureName: featureName,
          featureDesc: featureDesc,
          featureScore: featureScore,
        },
        { where: { featureName: targetFeature } }
      );
      res.status(201).json({ status: "Feature successfully updated" });
    } catch (err) {
      next(err);
    }
  }
  static async featureList(req, res, next) {
    try {
      let featureList = await Features.findAll({ raw: true });
      res.status(200).json(featureList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = featureControllers;
