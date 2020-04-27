const express = require('express');
const student = express.Router();

const StudentMng = require('../models/student-model');
const studentMng = new StudentMng();
const N = 9; // Show top N students

student.get('/', async function (req, res) {
    const results = await studentMng.getTopNStudent(N); // Get results from getTopNStudent
    console.log(results)
    res.render('student', {
        "student": results,
        "Number":N
    }); // render results to EJS 
})

module.exports = student;