'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('program_schedules', 'new', {
      type: DataTypes.BOOLEAN,
      default: true
    })
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('program_schedules', 'new')
  }
}
