// dependencies
const express = require('express')
const app = express()


// config & middleware
require('dotenv').config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// root
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome!'
    })
})

// controllers


// start server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})