/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/main.scss';
import Carousel from './Carousel';

const Gallery = ({ restaurantPhotos, previousSlide, nextSlide, photoReported, toggleFlag, toggleExit, startCarousel, toggleCarousel, exitGallery, currentImageIndex, currentPicture }) => {
  const newPhotosArr = restaurantPhotos.slice(1, 10);
  const remainingPictures = restaurantPhotos.slice(10);
  const gridClassArr = [styles.gridIndex0, styles.gridIndex1, styles.gridIndex2, styles.gridIndex3, styles.gridIndex4, styles.gridIndex5, styles.gridIndex6, styles.gridIndex7, styles.gridIndex8];
  const homePagePhotos = newPhotosArr.map((photo, index) => <img className={gridClassArr[index]} key={Math.floor(Math.random() * 99999)} src={photo} alt="" />);
  if (startCarousel && !exitGallery) {
    return (
      <Carousel currentImageIndex={currentImageIndex} restaurantPhotos={restaurantPhotos} previousSlide={previousSlide} nextSlide={nextSlide} photoReported={photoReported} toggleFlag={toggleFlag} toggleExit={toggleExit} startCarousel={startCarousel} />
    );
  }
  return (
    <div id="photos-gallery" className={styles.photos}>
      <div className={styles.picHeading}>
        <h3>25 Photos</h3>
      </div>
      <div className={styles.grid} role="button" tabIndex="0" onClick={toggleCarousel}>
        {homePagePhotos}
        <button type="button" className={styles.ninthPic}>{`+ ${remainingPictures.length + 1} more`}</button>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  restaurantPhotos: PropTypes.arrayOf(PropTypes.string),
  previousSlide: PropTypes.func,
  nextSlide: PropTypes.func,
  photoReported: PropTypes.bool,
  toggleFlag: PropTypes.func,
  toggleExit: PropTypes.func,
  startCarousel: PropTypes.bool,
  toggleCarousel: PropTypes.func,
  exitGallery: PropTypes.bool,
  currentImageIndex: PropTypes.string,
  currentPicture: PropTypes.func,
};

Gallery.defaultProps = {
  restaurantPhotos: [],
  previousSlide: () => {},
  nextSlide: () => {},
  photoReported: false,
  toggleFlag: () => {},
  toggleExit: () => {},
  startCarousel: false,
  toggleCarousel: () => {},
  exitGallery: false,
  currentImageIndex: '',
  currentPicture: () => {},
};

export default Gallery;
