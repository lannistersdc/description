const dbHelpers = require('../database/mongo/dbHelpers.js');

const controller = {
  get: (req, res) => {
    const { restaurantId } = req.params;
    dbHelpers.getOne(restaurantId)
      .then((docs) => {
        res.status(200).send(docs);
      })
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    const restaurant = req.body;
      dbHelpers.postOne(restaurant)
      .then((docs) => {
        res.status(201).send(docs);
      })
      .catch(err => console.error(err));
  },
  put: (req, res) => {
    const { restaurantId } = req.params;
    const restaurant = req.body;
    dbHelpers.updateOne(restaurantId, restaurant)
      .then((docs) => {
        res.status(204).send(docs);
      })
      .catch(err => console.error(err));
  },
  delete: (req, res) => {
    const { restaurantId } = req.params;
    dbHelpers.deleteOne(restaurantId)
      .then((docs) => {
        res.sendStatus(204);
      })
      .catch(err => console.error(err));
  }
};

module.exports = controller;
