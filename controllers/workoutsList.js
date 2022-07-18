const workoutsList = require('express').Router()
const { sequelize, Sequelize } = require('../models')
const db = require('../models')
const { Workout } = db

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

// export
module.exports = workoutsList