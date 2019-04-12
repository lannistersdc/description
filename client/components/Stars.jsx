/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';

const icons = require('../icons/icons');

const Stars = ({ stars }) => {
  const allStars = [];
  // For each of the number of stars(floor the number) and add a star icon for each number of stars. If the number is greater than 0.25 or less than .75 then return the icon with the half star instead of full size.
  for (let i = 0; i < Math.floor(stars); i += 1) {
    allStars.push(
      <svg key={allStars.length}>
        <path className={styles.red} d={icons.star.full} />
      </svg>,
    );
  }

  if (stars - Math.floor(stars) > 0.25 && stars - Math.floor(stars) < 0.75) {
    allStars.push(
      <svg key={allStars.length}>
        <path className={styles.grey} d={icons.star.full} />
        <path className={styles.red} d={icons.star.half} />
      </svg>,
    );
    for (let i = 0; i < 5 - Math.floor(stars) - 1; i += 1) {
      allStars.push(
        <svg key={allStars.length}>
          <path className={styles.grey} d={icons.star.full} />
        </svg>,
      );
    }
  } else {
    for (let i = 0; i < 5 - Math.floor(stars); i += 1) {
      allStars.push(
        <svg key={allStars.length}>
          <path className={styles.grey} d={icons.star.full} />
        </svg>,
      );
    }
  }
  return (
    <div className={styles.stars}>
      {allStars}
      <div className={styles.starsText}>
        {stars}
      </div>
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
};

Stars.defaultProps = {
  stars: null,
};

export default Stars;
