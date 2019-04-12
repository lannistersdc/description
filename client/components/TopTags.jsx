import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';

const TopTags = ({ restaurantTags }) => {
  const tags = restaurantTags.map(restTag => (
    <div className={styles.tags} key={Math.floor(Math.random() * 99999)}>{restTag}</div>
  ));
  return (
    <div className={styles.topTags}>
      <div className={styles.tagText}>Top Tags: </div>
      {tags}
    </div>
  );
};

TopTags.propTypes = {
  restaurantTags: PropTypes.arrayOf(PropTypes.string),
};

TopTags.defaultProps = {
  restaurantTags: [],
};

export default TopTags;
