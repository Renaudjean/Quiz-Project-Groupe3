let db = require('../database/database');

module.exports.score_Collect = (req, response) => {
    db.query('SELECT `SC_ID`, `Total_Score`, `Total_Time`, `Quiz` FROM `score` WHERE `Quiz` = ?', [req.params.id], function (err, row, fields) {
        if (err) throw err;
        console.log(row);
        response.json(row);       
    })
}
