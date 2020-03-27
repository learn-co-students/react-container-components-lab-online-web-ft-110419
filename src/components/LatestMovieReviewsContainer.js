import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'G1FMb3rDnrTjOUsNAOuO4QTWDibrMtmI';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{
        state = {
            reviews: []
        }
    
    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews(){
        fetch(URL)
        .then(res => res.json())
        .then(reviews => {
            this.setState({reviews: reviews.results})
        })
    }

    render(){
        return(
        <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
        )
    }
}