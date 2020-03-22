import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviews extends Component {
    constructor(props) {
      super(props);
      this.state = {
          reviews: []
         
      };
    }
   
    // handleClick = () => {
    //     this.setState({})
    // }

    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(data => {
              this.setState({reviews: data.results})
          })
      
    }

    renderReview = (review) => {
        return (
        <div>
            <h3>{review.display_title}</h3>
            <h4>{review.headline}</h4>
            <p>{review.summary_short}</p>
        </div>)
    }


   
    render() {
      return (
          <div className="latest-movie-reviews" onClick={this.handleClick}>
              <MovieReviews fetchedResults={this.state.reviews} renderReview={this.renderReview}/>
            </div>
      )
    }
  }

export default LatestMovieReviews
