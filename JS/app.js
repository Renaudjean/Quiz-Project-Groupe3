
let db= require('../database/database');
const conn = require('../database/database');


module.exports.quiz_Gen = (req, response) => {
    db.query('SELECT `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz`', function (err, row, fields){
        if (err) throw err;
        console.log(row);
        response.render("../index", {quiz: row});       
            })
}