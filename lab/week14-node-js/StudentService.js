const express = require('express');
const mysql = require('mysql2/promise')
const dotenv = require('dotenv');
const route = express.Router();
const app = express();
//connect to database
dotenv.config()

app.use(express.urlencoded({
    extended: true
}));

app.use('/', route);
//Non Persistant 
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

route.post('/student', function (req, res) {
    let student = req.body.student;
    console.log(student);
    if (!student) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student'
        });
    }
    connection.query(`INSERT INTO student SET StudentID = ${student.STU_ID},Firstname = ${student.STU_FNAME}`, student, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'New student has been created successfully.'
        });
    });
});

route.put('/student', function (req, res) {
    let student_id = req.body.student_id;
    let student = req.body.student;
    if (!student_id || !student) {
        return res.status(400).send({
            error: student,
            message: 'Please provide student and student_id '
        });
    }
    connection.query("UPDATE student SET ? WHERE STU_ID = ?", [student, student_id], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'Student has been updated successfully.'
        })
    });
});

route.delete('/student', function (req, res) {
    let student_id = req.body.student_id;
    if (!student_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student_id'
        });
    }
    connection.query('DELETE FROM personal_info WHERE STU_ID = ?', [student_id], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'Student has been deleted successfully.'
        });
    });
});

route.get('/student/:id', function (req, res) {
    let student_id = req.params.id;
    if (!student_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student id.'
        });
    }
    connection.query('SELECT * FROM personal_info where STU_ID=?', student_id, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results[0],
            message: 'Student retrieved'
        });
    });
});


route.get('/students', function (req, res) {
    connection.query('SELECT * FROM personal_info', function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'Student list.'
        });
    });
});

app.listen(process.env.PORT)