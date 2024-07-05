const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('swagier', 'user', 'password', {
    host: 'db',
    dialect: 'postgres'
});

module.exports = sequelize;
