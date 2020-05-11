//require resources
const express = require('express');
const login = express.Router();
const LoginMng = require('../models/login-model');
const LogMng = require('../models/log-model');
// init object
const loginMng = new LoginMng();
const logMng = new LogMng();
// sent page login
login.get('/', (req, res) => {
    res.render('pages/login');
});
//
login.post('/', async(req, res) => {
    let mail = req.body.email;
    let password = req.body.password;
    let role = req.body.admin;

    // role == on means the user is admin
    if (role == 'on') {
        const signin = await loginMng.loginAdmin(mail);
        if (signin.rows.length != 0) {
            if (password == signin.rows[0].password) {
                req.session.user = signin.rows[0].user_id;
                // recording the timestamp
                await logMng.createLog(req.session.user);
                res.redirect('/admin');
            } else {
                res.render('pages/login', { message: "The password does not correct." });
            }
        } else {
            res.render('pages/login', { message: `There is no admin user : ${mail}` });
        }
    } else {
        const signin = await loginMng.loginGeneral(mail);
        if (signin.rows.length != 0) {
            if (password == signin.rows[0].password) {
                req.session.user = signin.rows[0].user_id;
                // recording the timestamp
                await logMng.createLog(req.session.user);
                res.redirect('/search');
            } else {
                res.render('pages/login', { message: "The password does not correct." });
            }
        } else {
            res.render('pages/login', { message: `There is no user : ${mail}` });
        }
    }
});


module.exports = login;