import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

 class SearchableMovieReviewsContainer extends Component {

    state = {
     reviews: [],
     searchTerm: ""
    }
              
    handleChange = (event) => {
        this.setState({
         searchTerm: event.target.value
        })
    }
              
    handleSearch = () => {
       fetch(URL+"&query="+this.state.searchTerm)
        .then(resp => resp.json())
        .then(json => {
         this.setState({
          reviews: json.results
        }, () => console.log(this.state.reviews))
          })
       }
              
    render() {
      return(
       <div className="searchable-movie-reviews">
              
       <form
         onSubmit={ e => {
         e.preventDefault()
         this.handleSearch()
        }}>
        <input 
         type="text" 
         onChange={this.handleChange}
        />
        <button 
           type="submit"
        >
          Search
        </button>
        </form>
              
     <MovieReviews reviews={this.state.reviews} />
    </div>
      )
     }
    }
              
export default SearchableMovieReviewsContainer
