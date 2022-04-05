let db = require('../database/database');

module.exports.create_new_quiz = (req, response) => {
    let DBquizName = req.body.quizName
    let DBquizDesc = req.body.quizDesc
    let DBquizPhoto = req.body.quizPhoto

    let DBquestionTxt = req.body.questionTxt
    let DBquestionPhoto = req.body.questionPhoto
    let DBquestionQuizId = req.body.questionQuizId

    // let answerOption = req.body.answerOption
    // let optionNumber = req.body.optionNumber
    // let correctOrNot = req.body.correctOrNot
    // let questionId = req.body.questionId

    db.query("INSERT INTO `quiz`(`Quiz_Name`, `Quiz_Description`, `Quiz_Photo`) VALUES (?, ?, ?)", [DBquizName, DBquizDesc, DBquizPhoto]); 

    db.query("INSERT INTO `question`(`Question`, `Question_Photo`, `Quiz_ID`) VALUES (?, ?, ?)", [DBquestionTxt, DBquestionPhoto, DBquestionQuizId]);
    
    // db.query("INSERT INTO `answer`(`Answer`, `Option_Number`, `Correct_Or_Not`, `Question`) VALUES (?, ?, ?, ?)", [answerOption, optionNumber, correctOrNot, questionId]);

   
}