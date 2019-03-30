const Opentable = require('../database/index.js');

const controller = {
  get: (req, res) => {
    Opentable.find({})
      .sort({ restaurantId: 1 })
      .then((docs) => {
        res.status(200).send(docs);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  },
};

module.exports = controller;
