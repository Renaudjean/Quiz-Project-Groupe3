let db = require('../database/database');

module.exports.get_last_quiz_id = (req, response) => {
    db.query('SELECT `Quiz_ID` FROM `quiz` ORDER BY `Quiz_ID` DESC LIMIT 1', function (err, row, fields) {
        if (err) throw err;
        response.json(row);
    })
}