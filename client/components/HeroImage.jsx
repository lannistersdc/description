// Line 16 hard coded image need to dynamically change to work with id passed
import React from 'react';
import heroImage from '../styles/heroImage.scss';

class HeroImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  render() {
    return (
      <div className="hero-image">
        <div className="first-image">
          <img src="https://resizer.otstatic.com/v2/photos/wide-huge/25160669.jpg" alt="" />
        </div>
        <div className="favorite-restaurant">
          <button className="fav-btn" type="button">
            <span>
              <svg className="icon-svg" width="24vw" height="24vh">
                <g className="icon">
                  <path d="M7,2.99987873 L17,2.99987873 C18.1045695,2.99987873 19,3.89530923 19,4.99987873 L19,20.6055572 C19,20.8816996 18.7761424,21.1055572 18.5,21.1055572 C18.421402,21.1055572 18.343911,21.0870278 18.273815,21.0514724 L12,17.8691561 L5.72618504,21.0514724 C5.4799129,21.1763909 5.17900339,21.0780144 5.05408484,20.8317423 C5.01852946,20.7616462 5,20.6841552 5,20.6055572 L5,4.99987873 C5,3.89530923 5.8954305,2.99987873 7,2.99987873 Z M7,5 L7,18.3374734 L12,15.7665154 L17,18.3374734 L17,5 L7,5 Z" />
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default HeroImage;
