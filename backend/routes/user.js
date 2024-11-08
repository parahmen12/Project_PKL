// user.js
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db'); 

const router = express.Router();

// Endpoint Registrasi
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  // Cek apakah username sudah terdaftar
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length > 0) return res.status(400).json({ error: 'Username already exists' });
    
    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Simpan pengguna baru
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Endpoint Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Cari pengguna berdasarkan username
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(400).json({ error: 'Username or password incorrect' });
    
    const user = results[0];
    
    // Bandingkan password dengan hash di database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Username or password incorrect' });
    
    res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username } });
  });
});

module.exports = router;
