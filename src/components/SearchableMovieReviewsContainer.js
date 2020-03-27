import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state={ 
            reviews: [],
            searchTerm: ""

        }
    }
    handleUserInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    fetchReviews = (e)=> {
        let baseURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?api-key=${NYT_API_KEY}`
        e.preventDefault()
        fetch(baseURL).then(res => res.json())
        .then(revs =>{this.setState({reviews: revs.results})
        })
    }

    render(){
        return(
        <div  className="searchable-movie-reviews">
            <form onSubmit={e=> this.fetchReviews(e)}>
                <input type="text" name="search" onChange={this.handleUserInput} />
                <input type="submit" value="Search" />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>)
    }
}