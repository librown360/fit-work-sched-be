'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workout_schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT
      },
      week_number: {
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
      day_of_week: {
        type: Sequelize.STRING,
        allowNull: false
      },
      current: {
        type: Sequelize.BOOLEAN,
        default: true
      },
      complete: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      program_schedule_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      workout_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workout_schedules');
  }
};