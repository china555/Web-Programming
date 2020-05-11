var express = require('express');
var logout = express.Router();

// when do logout, just clear the session storage
logout.get('/', function(req, res, next) {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = logout;