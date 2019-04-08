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
import HeroImage from './HeroImage';
import Title from './Title';
import Info from './Info';
import TopTags from './TopTags';
import Description from './Description';
import PrivateDining from './PrivateDining';

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
      expandedDescription: false,
      restaurantSaved: false,
    };
    this.getOneRestaurant = this.getOneRestaurant.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.toggleSave = this.toggleSave.bind(this);
  }

  componentDidMount() {
    const { restaurantId } = this.state;
    const id = restaurantId || 1;
    this.getOneRestaurant(id);
  }

  getOneRestaurant(restaurantId) {
    axios
      .get(`/api/restaurant/${restaurantId}`)
      .then((response) => {
        // eslint-disable-next-line no-shadow
        const { restaurantId, restaurantName, restaurantRating, restaurantReviews, restaurantPrice, restaurantCuisine, restaurantDescription, restaurantTags } = response.data;
        this.setState({
          restaurantId,
          restaurantName,
          restaurantRating,
          restaurantReviews,
          restaurantPrice,
          restaurantCuisine,
          restaurantDescription,
          restaurantTags,
        });
      }, () => console.log(this.state))
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

  render() {
    const { restaurantName, restaurantRating, restaurantReviews, restaurantPrice, restaurantCuisine, restaurantDescription, restaurantTags, expandedDescription, restaurantSaved } = this.state;
    return (
      <div className={styles.overviewSection}>
        <HeroImage restaurantSaved={restaurantSaved} toggleSave={this.toggleSave} />
        <Title restaurantName={restaurantName} />
        <Info restaurantRating={restaurantRating} restaurantReviews={restaurantReviews} restaurantPrice={restaurantPrice} restaurantCuisine={restaurantCuisine} />
        <TopTags restaurantTags={restaurantTags} />
        <Description restaurantDescription={restaurantDescription} expandedDescription={expandedDescription} toggleDescription={this.toggleDescription} />
        <PrivateDining />
      </div>
    );
  }
}

export default App;
