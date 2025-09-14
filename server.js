const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const userVersion1 = new Map(); // In-memory storage for email (Version 1)
const userVersion2 = new Map(); // In-memory storage for phone number (Version 2)



// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Exporting app for testing purposes