import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Aj6Lt0Fe8GZohNURieGIAKxckl8AG0MO';
const QUERY_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }

  handleSearchInput = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch(QUERY_URL + this.state.searchTerm)
      .then(res => res.json())
      .then(reviewData => {
        this.setState({ reviews: reviewData.results })
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Review</label>
          <input
            id="search-input"
            type='text'
            style={{ width: 300 }}
            onChange={this.handleSearchInput}
            />
            <button type="submit">Search</button>
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review by Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
