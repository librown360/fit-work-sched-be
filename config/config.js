require('dotenv').config()
// const Pool = require('pg').Pool

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.PG_HOST,
    "dialect": "postgres"
  }
}

// const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = 
// `postgresql: //${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.PG_HOST}
// :${process.env.PG_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL :
//   connectionString,
//     ssl: {
//       rejectUnauthorized: false
//     }
// })
// module.exports = pool