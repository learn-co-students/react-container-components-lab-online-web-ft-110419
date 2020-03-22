import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY =`PveGm1Z4PdlQOUIAkemyQnq7vsLvnlxK`
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviews extends Component {
    constructor(props) {
      super(props);
      this.state = {
          reviews: [], 
          searchTerm: ""
      };
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            searchTerm: event.target.value
        })
    }
   
    handleSubmit = (event) => {
        event.preventDefault()
        let query = this.state.searchTerm
        fetch(URL + `&query=${query}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data.results)
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
          <div className="searchable-movie-reviews" >
              Searchable movie reviews Container
              <form onSubmit={event => this.handleSubmit(event)}>
                  <input type="text" value={this.state.searchTerm} onChange={event => this.handleChange(event)}></input>
                  <input type="submit" value="submit"></input>
              </form>
              <MovieReviews reviews={this.state.reviews} renderReview={this.renderReview}/>
          </div>
      )
    }
  }


export default SearchableMovieReviews