import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Aj6Lt0Fe8GZohNURieGIAKxckl8AG0MO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  fetchReviews() {
    fetch(URL)
      .then(res => res.json())
      .then(reviewsData => {
        this.setState({
          reviews: reviewsData.results
        })
      })
  }

  componentDidMount() {
    this.fetchReviews()
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Movie Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
