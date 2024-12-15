// Import the required modules
const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Simple Node.js Web App!</h1>');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
