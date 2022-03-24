let createError = require('http-errors');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let port = process.env.PORT || 5000;
let app = express();
let router = require('./router.js');
let db= require('../database/database');
const conn = require('../database/database');

app.set("view engine", "ejs");
// view engine setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static("public"));
//mySQL



app.use('/', router)

app.use('/quiz/:id', (req, response) => {
    db.query('SELECT `Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz` WHERE Quiz_ID=?',[req.params.id], function (err, quizName, fields){
            if (err) throw err;   
            console.log(quizName);
             db.query('SELECT  `ANS_ID`, `Answer`, `Option_Number`, `Correct_Or_Not`, `Question` FROM `answer` WHERE Question=?',[req.params.id], function (err, row, fields){
            if (err) throw err;
            console.log(row);
            response.render("../quiz", {QA: row[0] , quiz: quizName[0]});       
            })
        })
    })

app.use('/end-game', (req, response) => {
    response.render("../end-game");
})


    //listen on environment 5000
app.listen(port, ()=> console.log(`listening on ${port}`));
