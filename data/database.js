const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'A5jA2nn(Y18NOH',
  multipleStatements: true
})

module.exports = pool;