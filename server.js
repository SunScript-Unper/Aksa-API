const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser')
const db = require('./app/database/db_config');
const cors = require('cors');

// MODELS 
const User = require('./app/models/user_models');

const app = express();
require('dotenv').config();

// PORT
const PORT = process.env.PORT | 3030;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ credentials: true }));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// SIMPLE API 
app.get('/', (req, res, next) => {
    res.json({
        message: "Aksa API is Working!"
    });
});

// ROUTES
require('./app/routes/userAuthRoutes')(app);
require('./app/routes/userController')(app);

// LISTENING PORT
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})