let db= require('../database/database');

module.exports.delete_This = (req, response) => {
    db.query('DELETE FROM `quiz` WHERE `Quiz_ID` = ?',[req.params.id])
    db.query('DELETE Ques, Ans FROM `question` Ques INNER JOIN `Answer` Ans ON Ques.Question_ID = Ans.Question WHERE Ques.Quiz_ID = ?',[req.params.id])
}