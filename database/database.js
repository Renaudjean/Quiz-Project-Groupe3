let mysql = require('mysql');
let conn = mysql.createConnection({
    host: 'localhost', // 127.0.0.1
    user: 'root',
    password: '',
    database: 'quizzdom_db'
});

conn.connect(function (err){
    if (err) throw err;
    console.log('Database connection established.');
});

module.exports = conn;  