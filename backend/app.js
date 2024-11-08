const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pembeliRoutes = require('./routes/pembeli');

app.use(bodyParser.json()); 
app.use('/api/pembeli', pembeliRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
