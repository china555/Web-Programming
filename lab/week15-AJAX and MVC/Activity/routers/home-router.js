const express = require('express');
const home = express.Router()

home.get('/', function (req, res) {
    res.render('index');
})

module.exports = home;