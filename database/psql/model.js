const Sequelize = require('sequelize');
const db = require('./index.js');

const DescriptionModel = db.define(
  'Description',
  {
    restaurantId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    restaurantName: { type: Sequelize.STRING, allowNull: true },
    restaurantRating: { type: Sequelize.FLOAT, allowNull: true },
    restaurantReviews: { type: Sequelize.INTEGER, allowNull: true },
    restaurantPrice: { type: Sequelize.STRING, allowNull: true },
    restaurantCuisine: { type: Sequelize.STRING, allowNull: true },
    restaurantDescription: { type: Sequelize.STRING(600), allowNull: true },
  },
  {
    timestamps: false
  }
);

const TagModel = db.define('Tag', 
  {
    tag: { type: Sequelize.STRING, allowNull: true },
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Descriptions', 
        key: 'restaurantId' 
      }
    }
  },
  {
    timestamps: false
  }
);

const PhotoModel = db.define('Photo', 
  {
    photo: { type: Sequelize.STRING, allowNull: true },
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Descriptions', 
        key: 'restaurantId' 
      }
    }
  },
  {
    timestamps: false
  }
)


db
  .sync({force: true})
  .then(() => { console.log('Synced!') })
  .catch(error => console.error(error));

module.exports = {
  DescriptionModel,
  TagModel,
  PhotoModel
};