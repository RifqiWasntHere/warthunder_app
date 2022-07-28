const { Countries } = require("../models");

class countryControllers {
  static async addCountry(req, res, next) {
    try {
      let addCountry = await Countries.create({
        countryName: req.body.countryName,
      });
      res.status(201).json({ status: "Country successfully added." });
    } catch (err) {
      next(err);
    }
  }
  static async updateCountry(req, res, next) {
    try {
      let updateCountry = await Countries.update(
        { countryName: req.body.countryName },
        { where: { countryName: req.body.targetCountry } }
      );
      res.status(201).json({ status: "Country successfully updated" });
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
