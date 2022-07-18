'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TankFeatures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TankFeatures.init({
    tankId: DataTypes.INTEGER,
    featureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TankFeatures',
  });
  return TankFeatures;
};