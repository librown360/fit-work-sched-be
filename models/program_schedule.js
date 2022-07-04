'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Program_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Workout_Schedule }) {
      // workout_schedule association
      Program_Schedule.hasMany(Workout_Schedule, {
        foreignKey: 'program_schedule_id',
        as: 'workout_schedules'
      })
    }
  }
  Program_Schedule.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    notes: {
      type: DataTypes.TEXT,
    },
    number_of_weeks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    current: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    complete: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    sequelize,
    modelName: 'Program_Schedule',
    tableName: 'program_schedules',
    timestamps: false
  });
  return Program_Schedule;
};