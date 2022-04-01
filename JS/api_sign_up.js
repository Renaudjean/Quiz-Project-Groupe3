let db= require('../database/database');

module.exports.sign_up_check_mail = (req, response) => {
    db.query('SELECT `Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType` FROM `account`', [req.params.id], function (err, row, fields){
        if (err) throw err;
        response.json(row);       
            })
}
