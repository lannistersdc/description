import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';

const TopTags = ({ restaurantTags }) => {
  const tags = restaurantTags.map((restTag, index) => (
    <div className={styles.tags} key={restTag[index]}>{restTag}</div>
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
