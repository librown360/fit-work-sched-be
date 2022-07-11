// dependencies
const wkoSchedules = require('express').Router()
const { sequelize, Sequelize } = require('../models')
const db = require('../models')
const { Program_Schedule, Workout_Schedule, Workout } = db

// GET all workout schedules
wkoSchedules.get('/', async (req, res) => {
    try {
        const allWorkoutSchedules = await Workout_Schedule.findAll({})
        res.status(200).json(allWorkoutSchedules)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET workout schedule grouped by week for a specific program
wkoSchedules.get('/:program', async (req, res) => {
    try {
        const workoutWeeks = await Workout_Schedule.findAll({
            attributes: ['id', 'week_number', 'start_date', 'end_date'],
            where: { program_schedule_id: req.params.program },
            group: ['week_number', 'start_date', 'end_date'],
            order: sequelize.col('week_number')
        })
        res.status(200).json(workoutWeeks)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET a specific week's workout schedule for a specific program
wkoSchedules.get('/:program/:week', async (req, res) => {
    try {
        const workoutWeek = await Workout_Schedule.findAll({
            attributes: ['id', 'day_of_week'],
            where: { 
                program_schedule_id: req.params.program,
                week_number: req.params.week
            },
            include: {
                model: Workout,
                as: 'workouts',
                through: { attributes: [] },
                attributes: { exclude: ['program_id'] },    
            }
        })
        res.status(200).json(workoutWeek)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET a specific day's workout for a specific program and week
wkoSchedules.get('/:program/:week/:day', async (req, res) => {
    try {
        const workoutDay = await Workout_Schedule.findAll({
            attributes: ['id', 'day_of_week', 'notes'],
            where: { 
                program_schedule_id: req.params.program,
                week_number: req.params.week,
                day_of_week: req.params.day
            },
            include: {
                model: Workout,
                as: 'workouts',
                through: { attributes: [] },
                attributes: { exclude: ['program_id'] },    
            }
        })
        res.status(200).json(workoutDay)
    } catch (error) {
        res.status(500).json(error)
    }
})

// POST a workout schedule for a specific program schedule
wkoSchedules.post('/:program', async (req, res) => {
    try {
        // find the program to add the workout schedule under
        await Program_Schedule.findOne({
            where: { id: req.params.program }
        })

        const newWorkoutSchedule = await Workout_Schedule.create(req.body)
        res.status(201).json({
            message: `You have successfully created a workout schedule!`,
            data: newWorkoutSchedule
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// PUT a workout schedule for a specific program schedule
wkoSchedules.put('/:program/:workout', async (req, res) => {
    try {
        // find the program to update the workout schedule under
        await Program_Schedule.findOne({
            where: { id: req.params.program }
        })
        // update the specific workout schedule
        const updateWorkoutSchedule = await Workout_Schedule.update(req.body, {
            where: { id: req.params.workout }
        })
        res.status(200).json({
            message: `You have successfully updated ${updateWorkoutSchedule}!`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE a workout schedule for a specific program schedule
wkoSchedules.delete('/:program/:workout', async (req, res) => {
    try {
        // find the program to update the workout schedule under
        await Program_Schedule.findOne({
            where: { id: req.params.program }
        })
        // delete the specific workout schedule
        const deleteWorkoutSchedule = await Workout_Schedule.destroy({
            where: { id: req.params.workout }
        })
        res.status(200).json({
            message: `You have successfully deleted ${deleteWorkoutSchedule}!`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// export
module.exports = wkoSchedules