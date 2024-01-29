const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser')

require('dotenv').config();

const PORT = process.env.PORT | 5050
const db = require('./app/database/db_config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MODELS 
const User = require('./app/models/user_models');

// SIMPLE API 
app.get('/', (req, res, next) => {
    res.json({
        message: "API's Working!"
    });
});

// ROUTES
require('./app/routes/userAuthRoutes')(app);
require('./app/routes/userController')(app);

// LISTENING PORT
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})