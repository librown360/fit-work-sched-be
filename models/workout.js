'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Program, Workout_Schedule, WorkoutSchedule_Workout }) {
      // program association
      Workout.belongsTo(Program, {
        foreignKey: 'program_id',
        as: 'programs'
      })
      // workout_schedule association
      Workout.belongsToMany(Workout_Schedule, {
        foreignKey: 'workout_id',
        as: 'workout_schedules',
        through: WorkoutSchedule_Workout
      })
    }
  }
  Workout.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    workout_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Workout',
    tableName: 'workouts',
    timestamps: false
  });
  return Workout;
};