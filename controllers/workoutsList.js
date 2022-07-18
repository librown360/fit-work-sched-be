const workoutsList = require('express').Router()
const { sequelize, Sequelize } = require('../models')
const db = require('../models')
const { Workout, Program } = db

// GET all workouts
workoutsList.get('/', async (req, res) => {
    try {
        const allWorkouts = await Workout.findAll({})
        res.status(200).json(allWorkouts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET all workouts by program
workoutsList.get('/:program', async (req, res) => {
    try {
        const allWorkouts = await Workout.findAll({
            where: { program_id: req.params.program },
            order: sequelize.col('program_id')
        })
        res.status(200).json(allWorkouts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET all workouts per program and order by program
workoutsList.get('/:program/order', async (req, res) => {
    try {
        const workoutsByProgram = await Workout.findAll({
            where: { program_id: req.params.program },
            include: {
                model: Program,
                as: 'programs',
                attributes: ['id','program_name'],
                group: ['program_name']
            }
        })
        res.status(200).json(workoutsByProgram)
    } catch (error) {
        res.status(500).json(error)
    }
})

// export
module.exports = workoutsList