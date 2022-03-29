let db= require('../database/database');

module.exports.delete_This = (req, response) => {
    db.query('DELETE FROM `quiz` WHERE `Quiz_ID` = ?',[req.params.id])
}