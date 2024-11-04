require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const path = require('path');
const fs = require('fs');
const app = express();

// Configuración CORS para Hestia
app.use(cors({
  origin: [
    'https://koalacompany.com.ar',
    'https://www.koalacompany.com.ar',
    'http://localhost:3000'
  ],
  credentials: true
}));

app.use(express.json());

// Ruta de health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  });
});

// Ruta para obtener datos
app.get('/api/data', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Usuarios");
    console.log(`Retrieved ${rows.length} users from database`);
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV);
});