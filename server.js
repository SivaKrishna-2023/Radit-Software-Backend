const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require("path")
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

// production script

app.use(express.static("./Radit-software-Frontend1/build"));
app.get("*", (req, res) =>{
  res.sendFile(this.path.resolve(__dirname, "Radit-software-Frontend1", "build", "index.html"))
})

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
