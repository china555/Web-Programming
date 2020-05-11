// importing required module
const express = require('express');
const home = express.Router();

// showing up the home page
home.get('/', function(req, res) {
    res.render('pages/index', { message: "hello world", message2: "hello space" });
})

module.exports = home;