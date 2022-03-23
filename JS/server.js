let createError = require('http-errors');
let express = require('express');
let router = express.Router();
let path = require('path');
let bodyParser = require('body-parser');
let db= require('../database/database');
const { Router } = require('express');
const conn = require('../database/database');
let app = express();
let port = process.env.PORT || 5000;
app.set("view engine", "ejs");
// view engine setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static("public"));
//mySQL



app.get('/', (req, response) => {
    let row;
    let holder;
    let i =0;
    let Quiz_Name = [], Quiz_Description= [], Quiz_Photo= [];

    db.query('SELECT `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz`', function (err, row, fields){
        if (err) throw err;
        console.log(row);
        response.render("../index", {quiz: row});
                
            })
})

app.get('/quiz', (req, response) => {
    response.render("../quiz");
    })

    //listen on environment 5000
app.listen(port, ()=> console.log(`listening on ${port}`));
