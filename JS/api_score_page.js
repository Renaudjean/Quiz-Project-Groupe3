let db = require('../database/database');

module.exports.score_Page = (req, response) => {
    db.query('SELECT `Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz`', function (err, row, fields) {
        if (err) throw err;
        response.render("../score", {quiz: row});       
    })
}
module.exports.best_Score_Page = (req, response) => {
    let quizId = req.body.quizId
    let userId = req.body.userId
    db.query('SELECT `Total_Score`, `Total_Time` FROM `score` WHERE `Quiz` = ? AND `AC_ID` = ? ORDER BY `score`.`Total_Score` DESC', [quizId, userId], function (err, hiScore, fields) {
        if (err) throw err;
        if(hiScore.length< 1){
            response.json(0);
        }else{
            response.json(hiScore[0]);
        }
    })
}
module.exports.noQuestion = (req, response) => {
    let quizId = req.body.quizId
    db.query('SELECT COUNT(`Question`) AS Overall FROM `question` WHERE `Quiz_ID` = ?', [quizId], function (err, row, fields) {
        if (err) throw err;
       console.log(row[0].Overall);
        response.json(row[0])
               
    })
}