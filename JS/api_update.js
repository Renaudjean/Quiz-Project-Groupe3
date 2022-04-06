let db= require('../database/database');

module.exports.update_quiz = (req, response) => {
    db.query('SELECT `Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz` WHERE `Quiz_ID` = ?', [req.body.id], function (err, row, fields){
        if (err) throw err;
        response.json(row); 

    })
}