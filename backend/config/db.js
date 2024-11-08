const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Sesuaikan dengan user MySQL
  password: '', // Sesuaikan dengan password MySQL
  database: 'db_user_pptik', // Nama database yang dibuat
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL Database:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

module.exports = db;
