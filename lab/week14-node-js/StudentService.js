const express = require('express');
const mysql = require('mysql2/promise')
const dotenv = require('dotenv');
const route = express.Router();
const app = express();
const bodyParse = require('body-parser');
//connect to database
dotenv.config()

app.use(express.urlencoded({
    extended: true
}));
app.use(bodyParse.json())

app.use('/', route);
//Non Persistant 
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

route.post('/student', async (req, res) => {
    let student = req.body.student;
    // console.log(req.body);
    if (!student) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student'
        });
    }
    student.Phone = "0123456789"
    student.DOB = `${2020 - Number(student.DOB)}-01-01`
    // console.log(student);
    const sql = `INSERT INTO personal_info SET ?`
    // console.log(sql)
    const affect = await connection.query(sql, student)
    return res.send({
        error: false,
        data: affect.affectedRows,
        message: 'New student has been created successfully.'
    });
});

route.put('/student', async (req, res) => {
    let student_id = req.body.StudentID;
    let student = req.body.student;
    // console.log(student_id)
    if (!student_id || !student) {
        return res.status(400).send({
            error: student,
            message: 'Please provide student and student_id '
        });
    }
    student.Phone = "0123456789"
    student.DOB = `${2020 - Number(student.DOB)}-01-01`
    const sql = 'UPDATE personal_info SET ? WHERE StudentID = ?';
    const affect = await connection.query(sql, [student, student_id])
    return res.send({
        error: false,
        data: affect.affectedRows,
        message: 'Student has been updated successfully.'
    })
});

route.delete('/student', async (req, res) => {
    let student_id = req.body.StudentID;
    if (!student_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student_id'
        });
    }
    const sql = 'DELETE FROM personal_info WHERE StudentID = ?'
    connection.query(sql, [student_id])
    return res.send({
        error: false,
        message: 'Student has been deleted successfully.'
    });
});

route.get('/student/:id', async (req, res) =>{
    let student_id = req.params.id;
    console.log(student_id)
    if (!student_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student id.'
        });
    }
    const sql = 'SELECT * FROM personal_info where StudentID=?'
    const [data] = await connection.query(sql, student_id,) 
        return res.send({
            error: false,
            data: data,
            message: 'Student retrieved'
        });
});


route.get('/students', async (req, res) => {
    const sql = 'SELECT * FROM personal_info'
    await connection.query(sql)
        return res.send({
            error: false,
            message: 'Student list.'
        });
});

app.listen(process.env.PORT)