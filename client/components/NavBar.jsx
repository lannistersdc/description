import React from 'react';
import styles from '../scss/main.scss';

const Nav = () => (
  <div className={styles.footer}>
    <ul className={styles.list}>
      <li className="overview">
        <a className="overviewText" href="#description-area">
          <span>Overview</span>
        </a>
      </li>
      <li className="photos">
        <a className="photosText" href="#photos-gallery">
          <span>Photos</span>
        </a>
      </li>
      <li className="insiders">
        <a className="insidersext" href="javascript:void(0)">
          <span>Insiders</span>
        </a>
      </li>
      <li className="reviews">
        <a className="reviewsText" href="javascript:void(0)">
          <span>Review</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Nav;
