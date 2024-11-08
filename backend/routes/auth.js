// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();

// Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Hash password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: err.message });

    // Insert user into database
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, hash], (err, result) => {
      if (err) return res.status(400).json({ error: err.message });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check user existence
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ error: 'User not found' });

    // Check password
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(400).json({ error: 'Incorrect password' });

      // Create JWT token
      const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      res.json({ message: 'Login successful', token });
    });
  });
});

module.exports = router;
