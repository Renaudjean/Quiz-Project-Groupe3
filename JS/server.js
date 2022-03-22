let createError = require('http-errors');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let db= require('../database/database');
let app = express();
let port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
// view engine setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/assets',express.static('public'));
//mySQL


//listen on environment 5000
app.get('/', (req, response) => {
    response.render("../index");
    })
app.get('/quiz', (req, response) => {
    response.render("../quiz");
    })
app.listen(port, () => console.log(`listening on ${port}`));