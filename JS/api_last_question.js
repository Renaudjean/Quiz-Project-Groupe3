let db = require('../database/database');

module.exports.get_last_question_id = (req, response) => {
    db.query('SELECT `Question_ID` FROM `question` ORDER BY `Question_ID` DESC LIMIT 1', function (err, row, fields) {
        if (err) throw err;
        response.json(row);
    })
}