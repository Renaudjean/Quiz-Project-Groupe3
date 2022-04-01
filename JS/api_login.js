let db= require('../database/database');

module.exports.sign_check = (req, response) => {
    
    db.query('SELECT `AC_ID`, `Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType` FROM `account` WHERE `UserName` = ?',[req.body.username], function (err, row, fields){
        if (err) throw err;
        if (row[0] && row[0].Password === req.body.password) {
            req.session.user = row[0].UserName;
            response.json(row);
        } else {
            response.json(false);
        }
    })
}

