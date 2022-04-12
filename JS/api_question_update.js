let db = require('../database/database');

module.exports.question_Update = (req, response) => {
    db.query('SELECT `Question_ID`, `Question`, `Question_Photo`, `Answer`, `Quiz_ID` FROM `Question` WHERE `Quiz_ID`= ?', [req.body.id], function (err, row, fields){
        if (err) throw err;
        response.json(row);    
    })
}