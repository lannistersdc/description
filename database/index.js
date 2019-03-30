const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/opentable', { useNewUrlParser: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to mongodb'));

const restaurantSchema = mongoose.Schema({
  restaurantId: { type: Number, unique: true },
  restaurantName: { type: String },
  restaurantRating: { type: Number },
  restaurantReviews: { type: Number },
  restaurantPrice: { type: String },
  restaurantCuisine: { type: String },
  restaurantDescription: { type: String },
  restaurantPhotos: { type: String },
});

const Opentable = mongoose.model('Opentable', restaurantSchema);

module.exports = Opentable;
