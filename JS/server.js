let createError = require('http-errors');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let port = process.env.PORT || 7000;
let app = express();
let router = require('./router.js');
let db = require('../database/database');
const { read } = require('fs');
const { response } = require('express');

// session
const session = require('express-session')

app.set("view engine", "ejs");
// view engine setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static("public"));

// session
app.use(session({
    secret: 'secrete key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }), (req,res,next)=>{
      res.locals.session = req.session
      
      next()
  })

  
//mySQL


// EJS pages linking
app.use('/', router);

app.use('/new-quiz/', function(req, res) {
    res.render('../new-quiz');
});

app.use('/quiz/:id', (req, response) => {
    db.query('SELECT `Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz` WHERE Quiz_ID=?',[req.params.id], function (err, quizName, fields) {
        if (err) throw err;   
    
        db.query('SELECT `Question_ID`, `Question`, `Question_Photo`, `Answer`, `Quiz_ID` FROM `question` WHERE QUIZ_ID = ?',[req.params.id], function (err, row, fields) {
            if (err) throw err;
            response.render("../quiz", {QA: row[0] , quiz: quizName[0]});
        })
    })
})

// app.use('/end-game', (req, response) => {
//     response.render("../end-game"); 
// }) // commented this code out because this page now makes part of quiz.ejs
app.get('/score', (req, response) => {
   response.render("../score");
})
app.get("/login", (req, response) => {
    response.render("../login");
});
app.get("/new-quiz", (req, response) => {
    response.render("../new-quiz");
});
app.get("/update-quiz", (req, response) => {
    response.render("../update-quiz");
});



//listen on environment 5000
app.listen(port, () => console.log(`listening on ${port}`));
