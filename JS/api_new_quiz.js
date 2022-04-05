const res = require('express/lib/response');
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

    if (DBquizName && DBquizDesc && DBquizPhoto) {
        db.query("INSERT INTO `quiz`(`Quiz_Name`, `Quiz_Description`, `Quiz_Photo`) VALUES (?, ?, ?)", [DBquizName, DBquizDesc, DBquizPhoto], function (err, row, fields) {
            if (err) throw err;
            console.log(row.insertId);
            response.json(row.insertId);
        })
    } 

   if (DBquestionTxt && DBquestionPhoto && DBquestionQuizId) {
        db.query("INSERT INTO `question`(`Question`, `Question_Photo`, `Quiz_ID`) VALUES (?, ?, ?)", [DBquestionTxt, DBquestionPhoto, DBquestionQuizId], function (err, row, fields) {
            if (err) throw err;
            response.json(row.insertId);
        })
   }

    
    
    // db.query("INSERT INTO `answer`(`Answer`, `Option_Number`, `Correct_Or_Not`, `Question`) VALUES (?, ?, ?, ?)", [answerOption, optionNumber, correctOrNot, questionId]);

   
}