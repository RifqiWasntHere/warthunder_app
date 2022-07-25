const { UserTanks } = require("../models");

class userTankController {
  static async addUserTank(req, res, next) {
    try {
      const { userId, tankId } = req.body;
      let addUserTank = await UserTanks.create({ userId, tankId });
      res.status(201).json({ status: "User tanks successfully added ." });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userTankController;
