const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const userVersion1 = new Map(); // In-memory storage for email (Version 1)
const userVersion2 = new Map(); // In-memory storage for phone number (Version 2)

app.use('/api/v1', require('./src/routes/version1')(userVersion1));
app.use('/api/v2', require('./src/routes/version2')(userVersion2));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 'error',
        message: 'Something went wrong!'
    });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Exporting app for testing purposes