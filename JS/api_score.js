let db= require('../database/database');
module.exports.send_Scores = (req, response) => {
    let score = req.body.correctAnswers
    let time = req.body.averageTime
    let quizId = req.body.quizId
    let userID = req.body.user
    db.query("INSERT INTO `score`(`Total_Score`, `Total_Time`, `Quiz`, `AC_ID`) VALUES (?, ?, ?, ?)", [score, time, quizId, userID])

}