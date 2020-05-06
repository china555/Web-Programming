const mysql = require('mysql2/promise')
const dbConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

let pool = mysql.createPool(dbConfig);

module.exports = pool