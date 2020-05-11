//import module
const express = require('express');
const account = express.Router();
const LoginMng = require('../models/login-model');
const LogdataMng = require('../models/log-model');

// use contructor of the object
const loginMng = new LoginMng();
const logMng = new LogdataMng();

//method get 
account.get('/', async(req, res) => {
    const userinfo = await loginMng.getUser(req.session.user);
    const loginfo = await logMng.getLog(req.session.user);

    res.render('pages/account', { data: userinfo.rows[0], log: loginfo.rows });
});

module.exports = account;