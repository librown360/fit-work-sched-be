'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('programs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      program_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      program_length: {
        type: Sequelize.INTEGER
      },
      program_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      instructor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('programs');
  }
};