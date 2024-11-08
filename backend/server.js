const express = require('express');
const cors = require('cors');
const db = require('../backend/config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const pembeliRoutes = require('./routes/pembeli'); // Import pembeli routes

const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pembeli', pembeliRoutes);

// Error handling untuk route yang tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
