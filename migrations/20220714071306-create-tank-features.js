"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TankFeatures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tankId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tanks",
          key: "id",
        },
      },
      featureId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Features",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("TankFeatures");
  },
};
