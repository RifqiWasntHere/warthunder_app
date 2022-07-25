const { UserCountries } = require("../models");

class userCountryControllers {
  static async addUserCountry(req, res, next) {
    try {
      const { userId, countryId } = req.body;
      let addUserCountry = await UserCountries.create({ userId, countryId });
      res.status(201).json({ status: "User countries Added successfully." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userCountryControllers;
