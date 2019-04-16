import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from '../scss/main.scss';

const DemoCarousel = ({ restaurantPhotos }) => (
  <Carousel
    showIndicators={false}
    showStatus={false}
    showThumb={false}
    transitionTime={40}
    thumbWidth={100}
    selectedItem={1}
  >
    <div>
      { restaurantPhotos.map(photo => <img className={styles.allCarouselPhotos} key={Math.floor(Math.random() * 99999)} src={photo} alt="" />) }
    </div>
  </Carousel>
);

Carousel.propTypes = {
  restaurantPhotos: PropTypes.arrayOf(PropTypes.string),
};

Carousel.defaultProps = {
  restaurantPhotos: [],
};

export default DemoCarousel;
