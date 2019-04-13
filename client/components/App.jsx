/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable-next-line prefer-const */
import React from 'react';
import axios from 'axios';
import styles from '../scss/main.scss';
import NavBar from './NavBar';
import HeroImage from './HeroImage';
import Title from './Title';
import Info from './Info';
import TopTags from './TopTags';
import Description from './Description';
import PrivateDining from './PrivateDining';
import Gallery from './Gallery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: null,
      restaurantName: '',
      restaurantRating: null,
      restaurantReviews: null,
      restaurantPrice: '',
      restaurantCuisine: '',
      restaurantDescription: '',
      restaurantTags: [],
      restaurantPhotos: [],
      expandedDescription: false,
      restaurantSaved: false,
      currentImageIndex: '',
      currentImage: 1,
      photoReported: false,
      exitGallery: false,
      startCarousel: false,
    };
    this.getOneRestaurant = this.getOneRestaurant.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.toggleSave = this.toggleSave.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.toggleFlag = this.toggleFlag.bind(this);
    this.toggleExit = this.toggleExit.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
  }

  componentDidMount() {
    this.getOneRestaurant();
  }

  getOneRestaurant() {
    const id = Math.floor(Math.random() * 100) + 1;
    axios
      .get(`http://localhost:3000/api/restaurant/${id}`)
      .then((response) => {
        const { restaurantId, restaurantName, restaurantRating, restaurantReviews, restaurantPrice, restaurantCuisine, restaurantDescription, restaurantTags, restaurantPhotos } = response.data;
        this.setState({
          restaurantId,
          restaurantName,
          restaurantRating,
          restaurantReviews,
          restaurantPrice,
          restaurantCuisine,
          restaurantDescription,
          restaurantTags,
          restaurantPhotos,
        });
      })
      .catch(err => console.error(err));
  }

  toggleDescription() {
    const { expandedDescription } = this.state;
    this.setState({
      expandedDescription: !expandedDescription,
    });
  }

  toggleSave() {
    const { restaurantSaved } = this.state;
    this.setState({
      restaurantSaved: !restaurantSaved,
    });
  }

  toggleFlag() {
    const { photoReported } = this.state;
    this.setState({
      photoReported: !photoReported,
    });
  }

  toggleExit() {
    const { exitGallery } = this.state;
    this.setState({
      exitGallery: !exitGallery,
      startCarousel: false,
    });
  }

  toggleCarousel(e) {
    e.preventDefault();
    const { startCarousel } = this.state;
    const index = e.target.className;
    this.setState({
      startCarousel: !startCarousel,
      exitGallery: false,
      currentImageIndex: index,
    }, () => console.log(this.state));
  }

  previousSlide() {
    const { restaurantPhotos, currentImage } = this.state;
    const lastIndex = restaurantPhotos.length - 1;
    const shouldResetIndex = currentImage === 1;
    const index = shouldResetIndex ? lastIndex : currentImage - 1;
    this.setState({
      currentImage: index,
    });
  }

  nextSlide() {
    const { restaurantPhotos, currentImage } = this.state;
    const lastIndex = restaurantPhotos.length - 1;
    const shouldResetIndex = currentImage === lastIndex;
    const index = shouldResetIndex ? 1 : currentImage + 1;
    this.setState({
      currentImage: index,
    });
  }

  render() {
    const { restaurantName, restaurantRating, restaurantReviews, restaurantPrice, restaurantCuisine, restaurantDescription, restaurantTags, restaurantPhotos, expandedDescription, restaurantSaved, currentImageIndex, photoReported, startCarousel, exitGallery } = this.state;
    return (
      <div className={styles.overallApp}>
        <div className={styles.topHeaderImage}>
          <HeroImage restaurantSaved={restaurantSaved} toggleSave={this.toggleSave} restaurantPhoto={restaurantPhotos[0]} toggleCarousel={this.toggleCarousel} />
        </div>
        <div className={styles.overviewSection}>
          <NavBar />
          <div className={styles.tracy}>
            <Title restaurantName={restaurantName} />
            <Info restaurantRating={restaurantRating} restaurantReviews={restaurantReviews} restaurantPrice={restaurantPrice} restaurantCuisine={restaurantCuisine} />
            <TopTags restaurantTags={restaurantTags} />
            <Description restaurantDescription={restaurantDescription} expandedDescription={expandedDescription} toggleDescription={this.toggleDescription} />
            <PrivateDining />
            <Gallery restaurantPhotos={restaurantPhotos} previousSlide={this.previousSlide} nextSlide={this.nextSlide} photoReported={photoReported} toggleFlag={this.toggleFlag} toggleExit={this.toggleExit} toggleCarousel={this.toggleCarousel} startCarousel={startCarousel} exitGallery={exitGallery} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
