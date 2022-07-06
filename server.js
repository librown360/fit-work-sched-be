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
const schedulesController = require('./controllers/schedules')
app.use('/schedules', schedulesController)

// start server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})