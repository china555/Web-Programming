const express = require('express');
const course = express.Router()

// Use this code if you want to use JSON

const courseList = require('../models/course-model').courseJSON;
course.get('/', function(req, res){
    //console.log("From JSON");
    res.render('course',{'courses': courseList });
})

// Use this code if you want to connect with DB
/*
const CourseMng = require('../models/course-model').CourseMng;
const courseMng = new CourseMng();

course.get('/', async function(req, res){
    console.log("From DB");
    const results = await courseMng.getAllCourses();
    res.render('course',{'courses': results });
})*/

module.exports = course;