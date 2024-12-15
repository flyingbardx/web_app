const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use dynamic port for hosting (e.g., on Heroku)

// Middleware to serve static files (e.g., HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all route for undefined routes
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
