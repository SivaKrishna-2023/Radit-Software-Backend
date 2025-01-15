const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const consultantRoutes = require('./routes/consultant');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/consultants', consultantRoutes);

// Base route for testing and general use
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Radit Software Backend!');
});

// Start the server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
    });
}

// Export the app for testing
module.exports = app;
