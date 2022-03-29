let db= require('../database/database');

module.exports.delete_quiz = (req, response) => {
    db.query('DELETE FROM `quiz` WHERE `Quiz_ID` = ?', [req.params.id], function (err, row, fields){
    if (err) throw err;
    response.json(row);       
        })}
