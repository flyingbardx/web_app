const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Sample Vercel Web App!</h1>');
});

// Export the app for Vercel
module.exports = app;
