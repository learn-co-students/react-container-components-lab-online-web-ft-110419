import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e0EAFRauctuWDM4QJ7QN9qacBM9L3CZ9';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""

        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL}query=${this.state.searchTerm}`)
            .then(res => res.json())
            .then(json => {
                debugger
                this.setState({
                    reviews: json.results
                })
            })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={e => this.setState({ searchTerm: e.target.value })} /> <br />
                    <input type="submit" value="Search" />
                </form>

                {typeof this.state.reviews === 'object' &&
                    this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
