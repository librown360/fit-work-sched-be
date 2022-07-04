'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Instructor, Workout }) {
      // instructor association
      Program.belongsTo(Instructor, {
        foreignKey: 'instructor_id',
        as: 'instructor'
      })
      // workout association
      Program.hasMany(Workout, {
        foreignKey: 'program_id',
        as: 'workouts'
      })
    }
  }
  Program.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    program_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    program_length: {
      type: DataTypes.INTEGER,
    },
    program_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Program',
    tableName: 'programs',
    timestamps: false
  });
  return Program;
};