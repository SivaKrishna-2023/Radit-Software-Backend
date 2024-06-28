const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const consultantRoutes = require('./routes/consultant');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/consultants', consultantRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
