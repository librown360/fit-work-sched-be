// dependencies
const express = require('express')
const app = express()


// config & middleware
require('dotenv').config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// home
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome!'
    })
})

// controllers
const pgmSchedulesController = require('./controllers/pgmSchedules')
app.use('/program-schedules', pgmSchedulesController)

const wkoSchedulesController = require('./controllers/wkoSchedules')
app.use('/workout-schedules', wkoSchedulesController)

// start server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})