/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';

const icons = require('../icons/icons');

const Carousel = ({ restaurantPhotos, previousSlide, nextSlide, photoReported, toggleFlag, toggleExit, currentPicture, currentImageIndex }) => {
  // const carouselPhotos = restaurantPhotos.map(photo => <img onClick={currentPicture} className={styles.allCarouselPhotos} id={currentImageIndex} key={Math.floor(Math.random() * 99999)} src={photo} alt="" />);
  const reportFlag = (
    <div role="button" tabIndex="0" className={styles.bookmarking}>
      {photoReported ? (
        <div>
          <button type="button" className={styles.reported} onClick={toggleFlag}>
            <svg>
              <path d={icons.report} />
            </svg>
          </button>
        </div>
      ) : (
        <div>
          <button type="button" className={styles.notReported} onClick={toggleFlag}>
            <svg>
              <path d={icons.report} />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
  return (
    <div className={styles.carousel}>
      <img className={styles.allCarouselPhotos} src={restaurantPhotos[3]} alt="" />
      <div>
        <button type="button" className={styles.left} onClick={previousSlide}>
          <svg>
            <path d={icons.left_arrow} />
          </svg>
        </button>
        <button type="button" className={styles.right} onClick={nextSlide}>
          <svg>
            <path d={icons.right_arrow} />
          </svg>
        </button>
      </div>
      <button type="button" className={styles.exit} onClick={toggleExit}>
        <svg>
          <path d={icons.cancel} />
        </svg>
      </button>
      {reportFlag}
    </div>
  );
};

Carousel.propTypes = {
  restaurantPhotos: PropTypes.arrayOf(PropTypes.string),
  previousSlide: PropTypes.func,
  nextSlide: PropTypes.func,
  photoReported: PropTypes.bool,
  toggleFlag: PropTypes.func,
  toggleExit: PropTypes.func,
  currentImageIndex: PropTypes.string,
  currentPicture: PropTypes.func,
};

Carousel.defaultProps = {
  restaurantPhotos: [],
  previousSlide: () => {},
  nextSlide: () => {},
  photoReported: false,
  toggleFlag: () => {},
  toggleExit: () => {},
  currentImageIndex: '',
  currentPicture: () => {},
};

export default Carousel;
