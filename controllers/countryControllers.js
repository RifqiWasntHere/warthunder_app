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
  static async countryList(req, res, next) {
    try {
      let countryList = await Countries.findAll({ raw: true });
      res.status(200).json(countryList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = countryControllers;
