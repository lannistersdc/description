const router = require('express').Router();

const controller = require('./controller.js');

router
  .route('/restaurants/:restaurantId')
  .get(controller.get);

module.exports = router;
