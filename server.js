// dependencies
const express = require('express')
const cors = require('cors')
const app = express()


// config & middleware
require('dotenv').config()
const corsOptions = {
    origin: '*'
}
// app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const path = require('path')


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

const workoutsList = require('./controllers/workoutsList')
app.use('/workout-list', workoutsList)

// serve static front end in production mode
if (process.env.NODE_ENV === "development") {
    app.use(express.static(path.join(__dirname, 'build')));
  }

  // Root
app.get('*', (req, res) => {
    res.status(404).json({
      message: 'Not Found',
    })
  })

// start server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})