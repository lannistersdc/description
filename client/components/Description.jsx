/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';

const Description = ({ restaurantDescription, expandedDescription, toggleDescription }) => {
  const paragraphs = restaurantDescription.split('\n').map(paragraph => (
    // Made key to a random number so react in dev tools stops throwing errors
    <p key={Math.floor(Math.random() * 99999)}>{paragraph}</p>
  ));
  const expandCollapse = (
    <div className="expand-collapse">
      <div role="presentation" className={styles.expandDescription} onClick={toggleDescription}>
        {expandedDescription ? '- Read less' : '+ Read more'}
      </div>
    </div>
  );

  return (
    <div id="description-area" className={styles.description}>
      {/* Needs two different css attributes to show differently when the read more is clicked */}
      <div id={styles.descriptionText} className={expandedDescription ? styles.expandedP : styles.collapsedP}>
        {paragraphs}
      </div>
      {expandCollapse}
    </div>
  );
};

Description.propTypes = {
  restaurantDescription: PropTypes.string,
  expandedDescription: PropTypes.bool,
  toggleDescription: PropTypes.func,
};

Description.defaultProps = {
  restaurantDescription: '',
  expandedDescription: false,
  toggleDescription: () => {},
};

export default Description;
