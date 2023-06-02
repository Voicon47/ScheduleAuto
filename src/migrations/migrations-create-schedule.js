'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
        // scheduleID: DataTypes.STRING,
        // period: DataTypes.STRING,
        // day: DataTypes.String,
        // phong: DataTypes.STRING,
        // week: DataTypes.STRING
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ScheduleID: {
        type: Sequelize.STRING
      },
      Period: {
        type: Sequelize.STRING
      },
      Day: {
        type: Sequelize.STRING
      },
      Phong:{
        type:Sequelize.STRING
      },
      Week:{
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
    await queryInterface.dropTable('Schedules');
  }
};