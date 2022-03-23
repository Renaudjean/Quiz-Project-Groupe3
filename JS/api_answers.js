let db= require('../database/database');
const conn = require('../database/database');

module.exports.answer_Gen = (req, response) => {
    db.query('SELECT `ANS_ID`, `Answer`, `Option_Number`, `Correct_Or_Not`, `Question` FROM `answer` WHERE `Question` = ?', [req.params.qid], function (err, answer, fields){
        if (err) throw err;
        console.log(answer);
        response.json(answer);       
            })
}