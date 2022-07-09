// dependencies
const pgmSchedules = require('express').Router()
const db = require('../models')
const { Program_Schedule, Workout_Schedule, Workout } = db

// GET all program schedules
pgmSchedules.get('/', async (req, res) => {
    try {
        const allProgramSchedules = await Program_Schedule.findAll()
        res.status(200).json(allProgramSchedules)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET a specific program schedule
pgmSchedules.get('/:id', async (req, res) => {
    try {
        const oneProgramSchedule = await Program_Schedule.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(oneProgramSchedule)
    } catch (error) {
        res.status(500).json(error)
    }
})

// POST a program schedule
pgmSchedules.post('/', async (req, res) => {
    try {
        const newProgramSchedule = await Program_Schedule.create(req.body)
        res.status(201).json({
            message: 'You have successfully created a program schedule!',
            data: newProgramSchedule
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// PUT a program schedule
pgmSchedules.put('/:id', async (req, res) => {
    try {
        const updateProgramSchedule = await Program_Schedule.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json({
            message: `You have successfully updated ${updateProgramSchedule}!`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE a program schedule
pgmSchedules.delete('/:id', async (req, res) => {
    try {
        const deleteProgramSchedule = await Program_Schedule.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({
            message: `You have successfully deleted ${deleteProgramSchedule}!`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// export
module.exports = pgmSchedules