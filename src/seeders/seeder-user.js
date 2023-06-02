'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // MaMH: DataTypes.STRING,
    // TenMH: DataTypes.STRING,
    // SoTC: DataTypes.INTEGER,
    // Nhom: DataTypes.INTEGER,
    // Schedule: DataTypes.STRING
    return queryInterface.bulkInsert('Users', [{
      MaMH:'001413',
      TenMH:'Tiếng Anh 3| English 3',
      SoTC:'5',
      Nhom:'23',
      ScheduleID:`------789-------, Thứ 2, Phòng      , -2345678-0------------------------------------------
      ------789-------, Thứ 4, Phòng      , -2345678-0----------------------------------------
      ------789-------, Thứ 6, Phòng      , -2345678-0---------------------------------------`,
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
