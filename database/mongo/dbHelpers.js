const Description = require('./model.js');

module.exports = {
  getOne: (restaurantId) => {
    return Description.findOne({ restaurantId });
  },

  postOne: (restaurant) => {
    return Description.findOne().sort('-restaurantId')
      .then((item) => {
        restaurant.restaurantId = item.restaurantId + 1;
        return Description.create(restaurant);
      })
  },

  updateOne: (restaurantId, restaurant) => {
    return Description.findOneAndUpdate({ restaurantId }, restaurant, {new: true});
  },

  deleteOne: (restaurantId) => {
    return Description.findOneAndDelete({ restaurantId })
  }
}