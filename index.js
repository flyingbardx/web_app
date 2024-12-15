const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files (e.g., CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
