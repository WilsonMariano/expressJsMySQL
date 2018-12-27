const mysql = require('mysql');
 
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'test'
});
 
connection.on('error', function(err) {
    console.log(err.code);
});

exports.connection = connection;