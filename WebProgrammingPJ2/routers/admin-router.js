//require resources
const express = require('express');
const Check = require('../models/register1-model');
const Register = require('../models/register2-model');
const LoginMng = require('../models/login-model');

//instantiating the imported sources
const accountChecker = new Check();
const accountRegister = new Register();
const loginMng = new LoginMng();

const admin = express.Router();

// home page for admin directory
admin.get('/', (req, res) => {
    res.render('pages/admin');
});

// admin/register page
admin.get('/register', async(req, res) => {
    res.render('pages/register');
});

// admin/register page (when the user post data)
admin.post('/register', async(req, res) => {
    //getting elements from html
    let fname = req.body.fname;
    let lname = req.body.lname;
    let role = req.body.role;
    let email = req.body.email;

    // if the password matches between two password box, the service will proceed ahead
    if (req.body.password1 == req.body.password2) {
        let password = req.body.password1;
        // email will be used as login information, so checking whether email is already registered or not
        const checker = await accountChecker.emailChecker(email);
        if (checker.rows.length != 0) {
            res.render('pages/register', { message: "the email address is used.", title: "Register" });
        } else {
            await accountRegister.registerAccount(fname, lname, role, email, password);
            res.redirect('/admin/search');
        }
    } else {
        res.render('pages/register', { message: "the password does not match." });
    }

});

// admin/search page
// this page will show the all registered user
admin.get('/search', async(req, res) => {
    const users = await loginMng.Users();
    res.render('pages/userinfo', { data: users.rows });
});

// admin/delete page
// user who will be deleted can be taken from the parameter
admin.get('/delete/:id', async(req, res) => {
    await loginMng.deleteUser(req.params.id);
    res.redirect('/admin/search');
});

// admin/update page
// update user informatnio for any user
admin.get('/update/:id', (req, res) => {
    let user_id = req.params.id;
    res.render('pages/updateuser', { id: user_id })
});

//admin/update page
// when user post data
admin.post('/update/:id', async(req, res) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let role = req.body.role;
    let email = req.body.email;
    let password1 = req.body.password1;
    let password2 = req.body.password2;

    if (password1 !== password2) {
        res.redirect('/admin/search');
    }
    // getting information for current
    const user = await loginMng.getUser(req.params.id);
    // in these if statement inserting previous data if the new data is not specified
    if (user.rows.length != 0) {
        if (fname == "") {
            fname = user.rows[0].firstname;
        }

        if (lname == "") {
            lname = user.rows[0].lastname;
        }

        if (role == "") {
            role = user.rows[0].role;
        }

        if (email == "") {
            email = user.rows[0].email;
        }

        if (password1 == "") {
            password1 = user.rows[0].password;
        }

        const updateUser = await accountRegister.updateAccount(fname, lname, role, email, password1, req.params.id);

        if (updateUser.rows.length != 0) {
            res.redirect(`/admin/update/${req.params.id}`);

        } else {
            res.redirect('/admin/search/');
        }
    } else {
        res.render('pages/userinfo', { message: "Error!!" });
    }

});


module.exports = admin;