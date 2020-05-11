const Youtube_API_KEY = 'AIzaSyCr_nPPuROa0fEZjJFKDoTaKLFzf8Sr73Y'; // individual API_KEY

const path = require('path');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
// const app = express();
const router = express.Router();
//import routers
const home = require('./routers/home-router');
const login = require('./routers/login-router');
const search = require('./routers/search-router');
const account = require('./routers/account-router');
const admin = require('./routers/admin-router');
const logout = require('./routers/logout-router');
const setUser = require('./setUser');
const setAdminUser = require('./setAdminUser');

const axios = require('axios').default;
dotenv.config();

var sessionCheck = function(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};
// Step1. we will visit search page, and specify the search option and query (earch.ejs)
// Step2. /search will render search.ejs
express()
    .use(session({
        secret: 'thisisForITCS212P2',
        resave: false,
        saveUninitialized: true
    }))
    .use(express.static(path.join(__dirname, '/resources/Jquery.js')))
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static(path.join(__dirname, 'public')))
    // .use(express.static('public'))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use('/', home)
    .use('/logout', logout)
    .use('/login', login)
    .use('/account', setUser, account)
    .use('/admin', setAdminUser, admin)
    .use('/search', setUser, search)
    .get('/movie', (req, res) => {
        res.render('pages/movie');
    })
    .listen(process.env.PORT, function(req, res) {
        console.log(`Server listening at Port ${process.env.PORT}`);
    })

// -- -- -- -- -- -- -- --youtube-- -- -- -- -- -- -- -