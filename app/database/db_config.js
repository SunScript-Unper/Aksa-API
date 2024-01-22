const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOSTNAME,
        logging: false,
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully');
}).catch((error) => {
    console.log('Unable to connect to the database: ', error);
});

module.exports = sequelize;