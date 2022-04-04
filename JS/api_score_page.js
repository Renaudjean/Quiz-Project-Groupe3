let db = require('../database/database');

module.exports.score_Page = (req, response) => {
    db.query('SELECT `Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz`', function (err, row, fields) {
        if (err) throw err;
        response.render("../score", {quiz: row});       
    })
}