/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';

const icons = require('../icons/icons');

const HeroImage = ({ restaurantSaved, toggleSave, restaurantPhoto }) => {
  // conditionally render to when clicked the button changes from save this restauran to restaurant saved
  const bookmarked = (
    <div role="button" tabIndex="0" className={styles.bookmarking}>
      {restaurantSaved ? (
        <div>
          <button type="button" className={styles.favorited} onClick={toggleSave}>
            <span>
              <svg>
                <path d={icons.favoritedBookmark} />
              </svg>
            </span>
            <span>Restaurant saved!</span>
          </button>
        </div>
      ) : (
        <div>
          <button type="button" className={styles.save} onClick={toggleSave}>
            <span>
              <svg>
                <path d={icons.bookmark} />
              </svg>
            </span>
            <span>Save this restaurant</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.heroImage}>
      <img className={styles.backgroundImage} src={restaurantPhoto} alt="#" />
      {bookmarked}
    </div>
  );
};

HeroImage.propTypes = {
  restaurantSaved: PropTypes.bool,
  toggleSave: PropTypes.func,
  restaurantPhoto: PropTypes.string,
};

HeroImage.defaultProps = {
  restaurantSaved: false,
  toggleSave: () => {},
  restaurantPhoto: '',
};

export default HeroImage;
