'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('program_schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT
      },
      number_of_weeks: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      current: {
        type: Sequelize.BOOLEAN,
        default: true
      },
      complete: {
        type: Sequelize.BOOLEAN,
        default: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('program_schedules');
  }
};