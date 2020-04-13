const express = require('express');
const dotenv = require('dotenv');
const app = express();
/* Router Module for handling routing */
const router = express.Router();
const mysql = require('mysql');
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
dotenv.config()
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
app.use(express.urlencoded({
    extended: true
}));


function render() {

}

app.use('/', router);
router.get('/', function (req, res) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected DB:" + process.env.MYSQL_DATABASE);
        /* Prepare HTML */
        var output = `<!DOCTYPE html><html lang="en">`;
        output += `<head>
        <title>Student List</title>
        <style>
            table,th, td 
            {
                border: 2px solid black;
                border-collapse: collapse;
            }
            tr > td{
                padding: 12px;
                font-size: 20px;
            }
            .big{
                font-size: 30px;
            }
            </style>
            </head>
        <body>`;
        output += "<h1>Student List</h1><ul>";
        let sql = "SELECT * FROM personal_info"; /* SQL SELECT */
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("personal_info list...")
            output += ` <table style="width:100%">
            <tr style="font-size: 30px;">
                    <td class = "big">Name</td>
                    <td class = "big">DoB</td>
                    <td class = "big">Mobile</td></tr>`
            result.forEach(value => {
                const Date = value.DOB
                output += `<tr><td>${value.Firstname} ${value.Lastname}</td>
                <td>${Date.getDate()}-${months[Date.getMonth()]}-${Date.getFullYear()}</td>
                <td>${value.Phone}</td></tr>`
            });
            output += `</table><form action="/submit-form" method="POST">
            <label for="ID">ID:</label><br>
            <input type="text" id="id" name="id"><br>
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" maxlength="50"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" maxlength="50"><br>
            <label for="DOB">Date of Birth:</label><br>
            <input type="date" id="DOB" name="DOB"><br>
            <label for="phone">Phone:</label><br>
            <input type="text" id="phone" name="phone" maxlength="10"><br><br>
            <input type="submit" value="Submit"></form>
            </body></html>`;
            res.send(output);
            res.end();
            connection.end();
        });
    });
});

app.listen(process.env.PORT, function () {
    console.log(`Server listening at Port ${process.env.PORT}`);
});