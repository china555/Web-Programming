/* Import modules here: express, dotenv, router */
/* Connection to MySQL */
const express = require('express');
const dotenv = require('dotenv');
const app = express();
/* Router Module for handling routing */
const router = express.Router();
/* Connection to MySQL */
const mysql = require('mysql');
dotenv.config()
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

/* Connect to DB */
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected DB: " + process.env.MYSQL_DATABASE);

    /* INSERT a record */
    let sql = "INSERT INTO personal_info VALUES (4, 'Pad','Thai','1999-01-10', '0123456789')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record inserted");
    });
    connection.end();
});
/* Run Server */
app.listen(process.env.PORT, function () {
    console.log("Server listening at Port " + process.env.PORT);
});