const Opentable = require('../database/index.js');

const controller = {
  get: (req, res) => {
    const { restaurantId } = req.params;
    Opentable.findOne({ restaurantId })
      .then((docs) => {
        res.status(200).send(docs);
      })
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    const { restaurant } = req.body;
    Opentable.create(restaurant)
      .then((docs) => {
        res.status(201).send(docs);
      })
      .catch(err => console.error(err));
  },
  put: (req, res) => {
    const { restaurantId } = req.params;
    const { restaurant } = req.body;
    Opentable.findOneAndUpdate({ restaurantId }, restaurant, {new: true})
      .then((docs) => {
        res.status(204).send(docs);
      })
      .catch(err => console.error(err));
  },
  delete: (req, res) => {
    const { restaurantId } = req.params;
    Opentable.findOneAndDelete({ restaurantId })
      .then((docs) => {
        res.sendStatus(204);
      })
      .catch(err => console.error(err));
  }
};

module.exports = controller;
