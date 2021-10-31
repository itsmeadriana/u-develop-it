const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your SQL username,
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'election'
    },
    console.group('Connected to the election database.')
);

module.exports = db;