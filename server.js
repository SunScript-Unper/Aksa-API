const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 5050;
const app  = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple API 
app.get('/', (req, res, next) => {
    console.log('Welcome');
});

// Listening PORT
app.listen(PORT, () => {
     console.log(`Server listening on http://localhost:${PORT}`);
});