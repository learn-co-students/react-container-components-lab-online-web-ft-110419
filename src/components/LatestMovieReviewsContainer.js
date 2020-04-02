import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { API_KEY } from '../api_key';

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
  + `api-key=${API_KEY}`;

// Code LatestMovieReviewsContainer Here
// fetch a list of most recent reviews and display them
export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    this.fetchReviews()
  }

  fetchReviews() {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }))
      .catch(e => console.log(e.message));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}