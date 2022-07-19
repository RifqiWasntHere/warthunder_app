const { Countries } = require("../models");

class countryControllers {
  static async addCountry(req, res, next) {
    try {
      const { countryName } = req.body;
      let addCountry = await Countries.create({ countryName });
      res.status(201).json({ status: "Country successfully added." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = countryControllers;
