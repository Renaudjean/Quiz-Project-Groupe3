let db= require('../database/database');

module.exports.sign_up = (req, response) => {
    db.query('SELECT `Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType` FROM `account`', [req.params.id], function (err, row, fields){
        if (err) throw err;
        response.json(row);       
            })
}

// module.exports.sign_up = (req, response) => {
//     db.query('INSERT INTO `account`(`Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType`) VALUES (?, ?, ?, ?, ?, ?, ?)' , function (err, row, fields){
//         if (err) throw err;
//         response.json(row);       
//             })
// }