const res = require('express/lib/response');
let db = require('../database/database');

module.exports.create_new_quiz = (req, response) => {
    let DBquizName = req.body.quizName
    let DBquizDesc = req.body.quizDesc
    let DBquizPhoto = req.body.quizPhoto

    let DBquestionTxt = req.body.questionTxt
    let DBquestionPhoto = req.body.questionPhoto
    let DBquestionQuizId = req.body.questionQuizId

    let DBanswerOption = req.body.answerOption
    // let DBoptionNumber = req.body.optionNumber
    // let DBcorrectOrNot = req.body.correctOrNot
    let DBquestionId = req.body.questionId

    // query to insert quiz data
    if (DBquizName && DBquizDesc && DBquizPhoto) {
        db.query("INSERT INTO `quiz`(`Quiz_Name`, `Quiz_Description`, `Quiz_Photo`) VALUES (?, ?, ?)", [DBquizName, DBquizDesc, DBquizPhoto], function (err, row, fields) {
            if (err) throw err;
            console.log("quiz id = " + row.insertId);
            response.json(row.insertId);
        })
    } 

    // query to insert question data
   if (DBquestionTxt && DBquestionPhoto && DBquestionQuizId) {
        db.query("INSERT INTO `question`(`Question`, `Question_Photo`, `Quiz_ID`) VALUES (?, ?, ?)", [DBquestionTxt, DBquestionPhoto, DBquestionQuizId], function (err, row, fields) {
            if (err) throw err;
            console.log("question id = " + row.insertId);
            response.json(row.insertId);
        })
   }

   // query to insert answers data
    if (DBanswerOption) {
        db.query("INSERT INTO `answer`(`Answer`, `Question`) VALUES (?, ?)", [DBanswerOption, DBquestionId], function (err, row, fields) {
            if (err) throw err;
            console.log("answer id = " + row.insertId);
            response.json(row.insertId);
        });
    }
    
    // if (DBanswerOption && DBoptionNumber && DBcorrectOrNot && DBquestionId) {
    //     db.query("INSERT INTO `answer`(`Answer`, `Option_Number`, `Correct_Or_Not`, `Question`) VALUES (?, ?, ?, ?)", [DBanswerOption, DBoptionNumber, DBcorrectOrNot, DBquestionId], function (err, row, fields) {
    //         if (err) throw err;
    //         console.log(row.insertId);
    //         response.json(row.insertId);
    //     });
    // }
}