const { Users } = require("../models");

class userControllers {
  static async register(req, res, next) {
    try {
      const { userName, email, password } = req.body;
      let register = await Users.create({ userName, email, password });
      res.status(201).json({ status: "User registered successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userControllers;
