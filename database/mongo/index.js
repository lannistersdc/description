const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/description', { useNewUrlParser: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to mongodb'));

db = mongoose.connection;

module.exports = db;