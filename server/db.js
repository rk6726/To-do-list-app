const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool ({
    user: "postgres",
    password: "Database2023!",
    host: process.env.HOST,
    port: process.env.PORT,
    database: "todoapp"
})

module.exports = pool