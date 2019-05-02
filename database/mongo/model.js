const mongoose = require('mongoose');
const db = require('./index.js');

const restaurantSchema = mongoose.Schema({
  restaurantId: { type: Number, unique: true },
  restaurantName: { type: String },
  restaurantRating: { type: Number },
  restaurantReviews: { type: Number },
  restaurantPrice: { type: String },
  restaurantCuisine: { type: String },
  restaurantDescription: { type: String },
  restaurantTags: { type: [String] },
  restaurantPhotos: { type: [String] },
});

const Description = mongoose.model('description', restaurantSchema);

module.exports = Description;
