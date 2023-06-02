'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
    //   MaMH: DataTypes.STRING,
    // TenMH: DataTypes.STRING,
    // SoTC: DataTypes.INTEGER,
    // Nhom: DataTypes.INTEGER,
    // Schedule: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaMH: {
        type: Sequelize.STRING
      },
      TenMH: {
        type: Sequelize.STRING
      },
      SoTC: {
        type: Sequelize.INTEGER
      },
      Nhom:{
        type:Sequelize.INTEGER
      },
      ScheduleID:{
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};