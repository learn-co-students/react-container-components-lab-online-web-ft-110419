import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  state = { reviews: [], searchTerm: '' }

  handleSubmit = (event, query) => {
    event.preventDefault();
    console.log(query)
    fetch(`${URL}&query=${query}`)
    .then(response => response.json())
    .then(object => {
      this.setState({
        reviews: object.results
      });
    });
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={(event) => this.handleSubmit(event, this.state.searchTerm)}>
          <input onChange={this.handleChange} id="query" type="text" />
          <input type="submit" value="Search" />
        </form>
        {this.state.reviews.length > 0 ? <h3>Search Results:</h3> : ''}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
