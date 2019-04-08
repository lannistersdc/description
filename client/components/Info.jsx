// Rating & Reviews
import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import styles from '../scss/main.scss';

const icons = require('../icons/icons');

// eslint-disable-next-line object-curly-newline
const Info = ({ restaurantRating, restaurantReviews, restaurantPrice, restaurantCuisine }) => (
  <div className={styles.infoSection}>
    <Stars stars={restaurantRating} />
    <div className={styles.reviewContainer}>
      <div className={styles.reviews}>
        <svg>
          <path d={icons.reviews} />
        </svg>
        <div className={styles.reviewText}>
          {`${restaurantReviews} reviews`}
        </div>
      </div>
      <div className={styles.price}>
        <svg>
          <path d={icons.priceRange} />
        </svg>
        <div className={styles.priceText}>
          {restaurantPrice}
        </div>
      </div>
      <div className={styles.cuisine}>
        <svg>
          <path d={icons.cuisine} />
        </svg>
        <div className={styles.cuisineText}>
          {restaurantCuisine}
        </div>
      </div>
    </div>
  </div>
);

Info.propTypes = {
  restaurantRating: PropTypes.number,
  restaurantReviews: PropTypes.number,
  restaurantPrice: PropTypes.string,
  restaurantCuisine: PropTypes.string,
};

Info.defaultProps = {
  restaurantRating: null,
  restaurantReviews: null,
  restaurantPrice: '',
  restaurantCuisine: '',
};

export default Info;
