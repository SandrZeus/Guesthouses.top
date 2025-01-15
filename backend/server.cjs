const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const pool = require('./database.cjs');
const uploadPdfRoute = require('./routes/uploadPdf.cjs');
const deletePdfRoute = require('./routes/deletePdf.cjs');

require('dotenv').config();

// Middleware
app.use(cors({ 
  origin: ['https://www.guesthouses.top', 'https://guesthouses.top'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));
app.use(express.json());
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

// Auth route
app.use('/api/auth', require('./routes/authRoutes.cjs'));

// Serve static files
app.use('/uploads', express.static('uploads'));

// Use Routes
app.use('/api/upload-pdf', uploadPdfRoute(pool));
app.use('/api/pdfs', require('./routes/getPdfs.cjs'));
app.use('/api/delete-pdf', deletePdfRoute);

// Simple endpoints
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Start the server (without SSL handling here)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
