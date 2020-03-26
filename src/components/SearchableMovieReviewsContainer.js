import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchBar from './SearchBar'

const NYT_API_KEY = '&api-key=Wl4Q2oxhTWPEZd7cUUVUBL08w8wnEiyb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/searchTerm.json?query=';

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = event => {
    event.persist()
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearch = event => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm + NYT_API_KEY)
    .then(res => res.json())
    .then(reviews => this.handleResponse(reviews.results))
  }

  handleResponse= array => {
    this.setState({
      reviews: array
    }, ()=> console.log(this.state))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h2>Search Reviews</h2>
        <SearchBar
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          search={this.state.searchTerm}
        />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
