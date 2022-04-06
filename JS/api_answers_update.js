let db = require('../database/database');



module.exports.answers_Update = (req, response) => {
    let qID = req.body.id
    console.log(qID);
    db.query('SELECT `ANS_ID`, `Answer`, `Option_Number`, `Correct_Or_Not`, `Question` FROM `answer` WHERE `Question` = ?', [qID], function (err, row, fields){
        if (err) throw err;
        response.json(row);
    })
}