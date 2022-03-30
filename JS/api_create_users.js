let db= require('../database/database');


module.exports.sign_up_create_users = (req, response) => {


    db.query('INSERT INTO `account`(`Email`, `UserName`, `FirstName`, `LastName`, `Password`, `AccountType`) VALUES (?, ?, ?, ?, ?, 0)')
}