'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Program_Schedule, Workout, WorkoutSchedule_Workout }) {
      // program_schedule association
      Workout_Schedule.belongsTo(Program_Schedule, {
        foreignKey: 'program_schedule_id',
        as: 'program_schedule'
      })
      // workout association
      Workout_Schedule.belongsToMany(Workout, {
        foreignKey: 'workout_schedule_id',
        as: 'workouts',
        through: WorkoutSchedule_Workout
      })
    }
  }
  Workout_Schedule.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    notes: {
      type: DataTypes.TEXT,
    },
    week_number: {
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
    day_of_week: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    complete: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    program_schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Workout_Schedule',
    tableName: 'workout_schedules',
    timestamps: false
  });
  return Workout_Schedule;
};