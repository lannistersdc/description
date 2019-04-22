const Sequelize = require('sequelize');
const {username, password} = require('./psqlConfig.js')

const connection = new Sequelize('description', username, password, {
    host: localhost,
    dialect: 'postgres'
})

// console.log('hey')

connection
    .authenticate()
    .then(() => console.log('Connected!'))
    .catch(error => console.error(error));

module.exports = connection;