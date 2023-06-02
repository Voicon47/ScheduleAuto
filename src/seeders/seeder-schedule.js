'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // scheduleID: DataTypes.STRING,
    // period: DataTypes.STRING,
    // day: DataTypes.String,
    // phong: DataTypes.STRING,
    // week: DataTypes.STRING
    return queryInterface.bulkInsert('Schedulde', [{
        ScheduleID:'001413-23',
        Period:'------789-------',
        Day:'Thứ 2',
        Phong:'',
        Week:`-2345678-0------------------------------------------`,
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
