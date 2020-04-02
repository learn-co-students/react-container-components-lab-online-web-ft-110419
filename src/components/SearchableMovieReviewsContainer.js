import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

import { API_KEY } from '../api_key';

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// prodivde searchable interface allowing user to enter sesrch term & receive list of reviews that match
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.search();
  }

  search() {
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json => { this.setState({ reviews: json.results }) })
      .catch(e => console.log(e.message));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="search" value={this.state.searchTerm} onChange={this.handleChange} />
          <button>Search</button>
        </form>

        {this.state.reviews.length !== 0 && <MovieReviews reviews={this.state.reviews} />}
      </div>
    );
  }
}