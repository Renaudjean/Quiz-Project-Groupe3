let db= require('../database/database');
module.exports.send_Scores = (req, response) => {
    let score = req.body.correctAnswers
    let time = req.body.averageTime
    let quizId = req.body.quizId
    console.log(score);
    console.log(time);
    console.log(quizId);
    db.query("INSERT INTO `score`(`Total_Score`, `Total_Time`, `Quiz`) VALUES (?, ?, ?)", [score, time, quizId])

}