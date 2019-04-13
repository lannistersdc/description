/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';

const icons = require('../icons/icons');

const Carousel = ({ restaurantPhotos, previousSlide, nextSlide, photoReported, toggleFlag, toggleExit, startCarousel }) => {
  const carouselPhotos = restaurantPhotos.map(photo => <img className={styles.allCarouselPhotos} key={Math.floor(Math.random() * 99999)} src={photo} alt="" />);
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
      {carouselPhotos}
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
    //<img src={this.props.piclistorwhatever[this.state.index]} />
  );
};

Carousel.propTypes = {
  restaurantPhotos: PropTypes.arrayOf(PropTypes.string),
  previousSlide: PropTypes.func,
  nextSlide: PropTypes.func,
  photoReported: PropTypes.bool,
  toggleFlag: PropTypes.func,
  toggleExit: PropTypes.func,
  startCarousel: PropTypes.bool,
};

Carousel.defaultProps = {
  restaurantPhotos: [],
  previousSlide: () => {},
  nextSlide: () => {},
  photoReported: false,
  toggleFlag: () => {},
  toggleExit: () => {},
  startCarousel: false,
};

export default Carousel;
