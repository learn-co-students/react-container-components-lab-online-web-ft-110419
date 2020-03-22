import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviews extends Component {
    constructor(props) {
      super(props);
      this.state = {
          reviews: [], 
          searchTerm: ""
      };
    }


     

   
    // handleClick = () => {
    //     this.setState({})
    // }
   
    render() {
      return (
          <div className="searchable-movie-reviews" onClick={this.handleClick}>Searchable movie reviews Container</div>
      )
    }
  }


export default SearchableMovieReviews