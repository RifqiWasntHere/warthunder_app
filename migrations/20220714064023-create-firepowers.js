"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Firepowers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      turretId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Turrets",
          key: "id",
        },
      },
      shellId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Shells",
          key: "id",
        },
      },
      penetrationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Penetrations",
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
    await queryInterface.dropTable("Firepowers");
  },
};
