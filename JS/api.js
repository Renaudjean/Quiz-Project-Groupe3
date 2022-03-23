
let db= require('../database/database');
const conn = require('../database/database');


module.exports.question_Gen = (req, response) => {
    db.query('SELECT `Question`, `Question_Photo`, `Answer`, `Quiz_ID` FROM `Question` WHERE `Quiz_ID`= ?', [req.params.id], function (err, row, fields){
        if (err) throw err;
        console.log(row);
        response.json(row);       
            })
}
// module.exports.answer = (req, response) => {
//     db.query('SELECT `Quiz_Name`, `Quiz_Description`, `Quiz_Photo` FROM `quiz`', function (err, row, fields){
//         if (err) throw err;
//         console.log(row);
//         response.render("../index", {quiz: row});       
//             })
// }