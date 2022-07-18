'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Firepowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Firepowers.init({
    turretId: DataTypes.INTEGER,
    shellId: DataTypes.INTEGER,
    penetrationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Firepowers',
  });
  return Firepowers;
};