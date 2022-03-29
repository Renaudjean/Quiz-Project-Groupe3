let db= require('../database/database');


module.exports.sign_up = (req, response) => {
    db.query('INSERT INTO `account`(`AC_ID`, `Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7])', [req.params.id], function (err, row, fields){
        if (err) throw err;
        response.json(row);       
            })
}