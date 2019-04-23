const Sequelize = require('sequelize');
const {username, password} = require('./config.js')

const db = new Sequelize('description', username, password, {
    dialect: 'postgres'
})

// console.log('hey')

db
    .authenticate()
    .then(() => console.log('Connected!'))
    .catch(error => console.error(error));

module.exports = db;