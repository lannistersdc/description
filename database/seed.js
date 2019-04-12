/* eslint-disable no-console */
const mongoose = require('mongoose');

const Description = require('./index.js');
const restaurantData = require('./data.json');

const seedFunction = () => {
  Description.insertMany(restaurantData)
    .then(() => {
      console.log('database seeded');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
};

seedFunction();
