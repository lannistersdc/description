/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable-next-line prefer-const */
import React from 'react';
import axios from 'axios';

import HeroImage from './HeroImage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [],
    };
    this.getOneRestaurant = this.getOneRestaurant.bind(this);
  }

  componentDidMount() {
    this.getOneRestaurant(1);
  }

  getOneRestaurant(restaurantId) {
    axios
      .get(`/api/restaurants/${restaurantId}`)
      .then((response) => {
        this.setState({
          restaurant: response.data,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="main-app">
        <HeroImage />
      </div>
    );
  }
}

export default App;
