const router = require('express').Router();

const controller = require('./controller.js');

router
  .route('/restaurant/:restaurantId')
  .get(controller.get);

module.exports = router;
