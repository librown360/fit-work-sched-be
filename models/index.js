// dependecies
const { Sequelize } = require('sequelize')
require('dotenv').config()

// connect to database
const sequelize = new Sequelize(process.env.PG_URI)

async function connectDB() {
    try {
        await sequelize.authenticate()
        console.log(`Connected to DB at ${process.env.PG_URI}`)
    } catch (error) {
        console.log(`Unable to connect to DB: ${error}`)
    }
}

module.exports = {
    connectDB
}