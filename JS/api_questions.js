let db = require('../database/database');



module.exports.question_Gen = (req, response) => {
    db.query('SELECT `Question_ID`, `Question`, `Question_Photo`, `Answer`, `Quiz_ID` FROM `question` WHERE `Quiz_ID`= ?', [req.params.id], function (err, row, fields){
        if (err) throw err;
        response.json(row);    
    })
}
