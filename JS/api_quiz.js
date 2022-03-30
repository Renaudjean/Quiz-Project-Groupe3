let db = require('../database/database');

module.exports.photo_Gen = (req, response) => {
    db.query('SELECT `Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz` WHERE `Quiz_ID`= ?', [req.params.id], function (err, row, fields) {
        if (err) throw err;
        response.json(row);       
    })
}
