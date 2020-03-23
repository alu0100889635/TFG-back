'use strict';

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alba',
    password: '123456',
    database: 'emergenciasdb'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;