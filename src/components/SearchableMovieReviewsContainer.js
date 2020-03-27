import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'G1FMb3rDnrTjOUsNAOuO4QTWDibrMtmI';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{

    state = {
        reviews: [],
        searchTerm: ''
    }

    fetchSpecificMovie = () => {
        const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=${NYT_API_KEY}`
        fetch(URL)
        .then(res => res.json())
        .then(reviews => {
            this.setState({reviews: reviews.results})
        })
    }

    
    render(){
        return(
        <div className="search-form">
            <form onSubmit={this.fetchSpecificMovie}>
            <p>Search for a Review</p>
            <input
                type="text"
                name="searchTerm"
                onChange={this.handleSearchInput}
            / >
            <button type="submit">Submit</button>
            </form>
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        </div>
        )
    }

}
