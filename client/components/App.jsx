/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable-next-line prefer-const */
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurant: [],
    };
    this.getOneRestaurant = this.getOneRestaurant.bind(this);
  }

  componentDidMount() {
    this.getOneRestaurants();
  }

  getOneRestaurant() {
    let { id } = req.params;
    axios
      .get('/api/restaurants/:id')
      .then((response) => {
        this.setState({
          restaurant: response.data,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="main-app" />
    );
  }
}

export default App;
