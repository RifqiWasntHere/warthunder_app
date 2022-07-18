'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shells extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shells.init({
    shellName: DataTypes.STRING,
    shellDesc: DataTypes.STRING,
    shellScore: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Shells',
  });
  return Shells;
};