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

    fetchReviews = () => {
        let query = this.state.searchTerm
        fetch(URL + `&query=${query}`)
        .then(response => response.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }
   
    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchReviews()
    }
   
    render() {
      return (
          <div className="searchable-movie-reviews" >
              <form onSubmit={event => this.handleSubmit(event)}>
                  <input type="text" value={this.state.searchTerm} onChange={event => this.handleChange(event)}></input>
                  <input type="submit" value="submit"></input>
              </form>
              <MovieReviews reviews={this.state.reviews} />
          </div>
      )
    }
  }


export default SearchableMovieReviews