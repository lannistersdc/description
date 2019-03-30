const mongoose = require('mongoose');

const Opentable = require('./index.js');
const restaurantData = require('./data.json');

const seedFunction = () => {
  Opentable.insertMany(restaurantData)
    .then(() => {
      console.log('database seeded');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
};

seedFunction();
