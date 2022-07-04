'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkoutSchedule_Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkoutSchedule_Workout.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    workout_schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'WorkoutSchedule_Workout',
    tableName: 'workout_schedules_workouts',
    timestamps: false
  });
  return WorkoutSchedule_Workout;
};