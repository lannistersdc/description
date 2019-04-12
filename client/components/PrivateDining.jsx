/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from '../scss/main.scss';

const icons = require('../icons/icons');

const PrivateDining = () => (
  <div className={styles.privateDining}>
    <svg className={styles.privateDiningSvg}>
      <circle cx="24" cy="24" r="24" className={styles.circle} />
      <path className={styles.glass} d={icons.private_dining_glass} />
      <path className={styles.bird} d={icons.private_dining_bird} />
    </svg>
    <h3>
      Private Dining
      <p>Book your next event with us</p>
    </h3>
    <div className={styles.privateDiningButton}>
      View Details
    </div>
  </div>
);

export default PrivateDining;
