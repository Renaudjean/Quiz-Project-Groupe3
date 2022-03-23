let createError = require('http-errors');
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let port = process.env.PORT || 5000;
let app = express();
let router = require('./router.js');

app.set("view engine", "ejs");
// view engine setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static("public"));
//mySQL



app.use('/', router)

app.get('/quiz', (req, response) => {
    response.render("../quiz");
    })
app.get('/quiz', (req, response) => {
    response.render("../quiz");
    })

    //listen on environment 5000
app.listen(port, ()=> console.log(`listening on ${port}`));
