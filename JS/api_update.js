let db= require('../database/database');
const formidable = require('formidable');
const fs = require('fs');
const { response } = require('express');

module.exports.get_quiz = (req, response) => {
    db.query('SELECT `Quiz_ID`, `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz` WHERE `Quiz_ID` = ?', [req.body.id], function (err, row, fields){
        if (err) throw err;
        response.json(row); 

    })
}

module.exports.update_quiz = (req, response) => {
    const form = formidable({multiples: false});
    form.parse(req, function (err, fields, files) {
        console.log(files, fields, err);
    const oldpath = files.photo.filepath;
    const newpath = '/img/img-quiz/' + files.photo.originalFilename;
    fs.rename(oldpath, './public' + newpath, function (err) {
        if (err) {console.log(err);
            response.json(err)
        }
        else{ db.query('UPDATE `quiz` SET `Quiz_Name`=?, `Quiz_Description`=?, `Quiz_Photo`=? WHERE `Quiz_ID` = ?', [fields.name, fields.description, '/assets' + newpath, fields.id], function (err, row, fields){
            if (err) throw err;
            response.json(row);
        })}
       
  
      });
    })
}

module.exports.update_question = (req, response) => {
    const form = formidable({multiples: false});
    form.parse(req, function (err, fields, files) {
        if(files.questionPhoto ){
         console.log(files, fields, err);
        const oldpath = files.questionPhoto.filepath;
        const newpath = '/img/img-question/' + files.questionPhoto.originalFilename;
        fs.rename(oldpath, './public' + newpath, function (err) {
            if (err) {console.log(err);
                response.json(err)
            }
            else{db.query('UPDATE `question` SET `Question`=?,`Question_Photo`=?,`Answer`=? WHERE `Question_ID`=?', [fields.question, '/assets' + newpath, fields.answer, fields.id], function (err, row, fields){
                if (err) throw err;
                response.json(row);
            })}
          });
        }else {
            db.query('UPDATE `question` SET `Question`=?, `Answer`=? WHERE `Question_ID`=?', [fields.question,  fields.answer, fields.id], function (err, row, fields){
                if (err) throw err;
                response.json(row);
            })
        }
    })
}


module.exports.update_answers = (req, response) => {
    db.query('UPDATE `answer` SET `Answer`=?, `Correct_Or_Not`=?  WHERE `ANS_ID`=?', [req.body.reponse, req.body.correct, req.body.id], function (err, row, fields){
        if (err) throw err;
        response.json(row); 

    })
}