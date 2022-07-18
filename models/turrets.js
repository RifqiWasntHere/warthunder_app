'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turrets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Turrets.init({
    turretName: DataTypes.STRING,
    turretScore: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Turrets',
  });
  return Turrets;
};