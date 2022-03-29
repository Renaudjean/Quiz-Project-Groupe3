let db= require('../database/database');

module.exports.sign_check = (req, response) => {
    db.query('SELECT `AC_ID`, `Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType` FROM `account`', [req.params.id], function (err, row, fields){
        if (err) throw err;
        response.json(row);       
            })
}

