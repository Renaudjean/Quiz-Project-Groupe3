let db = require('../database/database');

module.exports.score_Collect = (req, response) => {
    
    db.query('SELECT `SC_ID`, `Total_Score`, `Total_Time`, `Quiz`, `AC_ID` FROM `score` WHERE `Quiz` = ?', [req.params.id], function (err, row, fields) {
        if (err) throw err;
        response.json(row);       
    })
}
