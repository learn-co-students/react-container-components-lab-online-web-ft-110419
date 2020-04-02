import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.search();
    }

    search(){
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(data => {
            this.setState({reviews: data.results})
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="search" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer;