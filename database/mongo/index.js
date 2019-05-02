const mongoose = require('mongoose');
const auth = require('./config.js');

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://52.53.127.31/description', {auth, useNewUrlParser: true })
  .then(() => console.log('Connected to mongodb'));

db = mongoose.connection;

module.exports = db;