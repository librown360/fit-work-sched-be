// dependencies
const express = require('express')
const cors = require('cors')
const app = express()


// config & middleware
require('dotenv').config()
app.use(cors({ origin: 'http://localhost:3000' }))
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
app.use('/program-schedule', pgmSchedulesController)

const wkoSchedulesController = require('./controllers/wkoSchedules')
app.use('/workout-schedule', wkoSchedulesController)

// start server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})