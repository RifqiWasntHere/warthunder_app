const { response } = require("express");
const { Op } = require("sequelize");
const {
  Users,
  Countries,
  UserCountries,
  UserTanks,
  Penetrations,
  Firepowers,
  Shells,
  Turrets,
  TankShells,
  Tanks,
  Features,
  TankFeatures,
} = require("../models");

class Controllers {
  static async register(req, res, next) {
    try {
      const { userName, email, password } = req.body;
      let register = await Users.create({ userName, email, password });
      res.status(201).json({
        id: register.id,
        username: register.userName,
        email: register.email,
      });
    } catch (err) {
      next(err);
    }
  }
  static async addTurret(req, res, next) {
    try {
      const { turretName, turretScore } = req.body;
      let addTurret = await Turrets.create({ turretName, turretScore });
      res.status(201).json({ status: "Turret successfully added." });
    } catch (err) {
      next(err);
    }
  }
  static async addShell(req, res, next) {
    try {
      const { shellName, shellDesc, shellScore } = req.body;
      let addShell = await Shells.create({ shellName, shellDesc, shellScore });
      res.status(201).json({ status: "Shell successfully added." });
    } catch (err) {
      next(err);
    }
  }
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
  static async addCountry(req, res, next) {
    try {
      const { countryName } = req.body;
      let addCountry = await Countries.create({ countryName });
      res.status(201).json({ status: "Country successfully added." });
    } catch (err) {
      next(err);
    }
  }
  static async addTank(req, res, next) {
    try {
      const { tankName, turretId, armorScore, engine, countryId } = req.body;
      let addTank = await Tanks.create({
        tankName,
        turretId,
        armorScore,
        engine,
        countryId,
      });
      res.status(201).json({ status: "Tank successfully added." });
    } catch (err) {
      next(err);
    }
  }
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

module.exports = Controllers;
