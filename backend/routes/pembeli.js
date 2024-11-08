// backend/routes/pembeli.js
const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Get all pembeli
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM pembeli';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Get pembeli by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM pembeli WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) return res.status(404).json({ error: 'Pembeli not found' });
    res.json(results[0]);
  });
});

// Add new pembeli
router.post('/', (req, res) => {
  const { nama, paket_pc, harga, tanggal_pembelian, waktu_pembelian, status } = req.body;
  const sql = 'INSERT INTO pembeli (nama, paket_pc, harga, tanggal_pembelian, waktu_pembelian, status) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nama, paket_pc, harga, tanggal_pembelian, waktu_pembelian, status], (err, result) => {
    if (err) {
      console.error('Error adding data:', err.message);
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({ message: 'Pembeli added successfully' });
  });
});

// Update pembeli
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nama, paket_pc, harga, tanggal_pembelian, waktu_pembelian, status } = req.body;
  const sql = 'UPDATE pembeli SET nama = ?, paket_pc = ?, harga = ?, tanggal_pembelian = ?, waktu_pembelian = ?, status = ? WHERE id = ?';
  db.query(sql, [nama, paket_pc, harga, tanggal_pembelian, waktu_pembelian, status, id], (err, result) => {
    if (err) {
      console.error('Error updating data:', err.message);
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: 'Pembeli updated successfully' });
  });
});

// Delete pembeli
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM pembeli WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Pembeli deleted successfully' });
  });
});

module.exports = router;
