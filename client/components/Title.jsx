import React from 'react';
import PropTypes from 'prop-types';


const Title = ({ restaurantName }) => (
  <h1>{restaurantName}</h1>
);

Title.propTypes = {
  restaurantName: PropTypes.string,
};

Title.defaultProps = {
  restaurantName: '',
};

export default Title;
