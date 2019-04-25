const Sequelize = require('sequelize');
const db = require('./index.js');

const DescriptionModel = db.define(
  'Description',
  {
    restaurantId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    restaurantName: { type: Sequelize.STRING, allowNull: false },
    restaurantRating: { type: Sequelize.FLOAT, allowNull: false },
    restaurantReviews: { type: Sequelize.INTEGER },
    restaurantPrice: { type: Sequelize.STRING },
    restaurantCuisine: { type: Sequelize.STRING },
    restaurantDescription: { type: Sequelize.STRING },
    restaurantTags: { type: Sequelize.ARRAY(Sequelize.STRING) },
    restaurantPhotos: { type: Sequelize.ARRAY(Sequelize.STRING) }
  }
);

const TagModel = db.define('Tag', {
  tag: { type: Sequelize.STRING },
  restaurantId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Descriptions', 
      key: 'restaurantId' 
    }
  }
})

const PhotoModel = db.define('Photo', {
  photo: { type: Sequelize.STRING },
  restaurantId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Descriptions', 
      key: 'restaurantId' 
    }
  }
})


db
  .sync()
  .then(() => { console.log('Synced!') })
  .catch(error => console.error(error));

module.exports = {
  DescriptionModel,
  TagModel,
  PhotoModel
};