import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'

export default class LatestMovieReviewsContainer extends React.Component {

	state = {
		reviews: [],
		searchTerm: "",
	}

	changeQuery = (event) => {
		this.setState({
			searchTerm: event.target.value
		}, () => console.log(this.state.searchTerm))
	}

	getResults = (event) => {
		event.preventDefault()
		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?`+ `api-key=${NYT_API_KEY}`).then(response => response.json()).then(json => {
			this.setState({
				reviews: json.results.filter(review => review.display_title.toLowerCase().includes(this.state.searchTerm))
			})
		})
	}

	render() {
		return (
			<div className="searchable-movie-reviews">
				<form onSubmit={this.getResults}>
					<input type="text" onChange={this.changeQuery} />
					<input type="submit" value="Search" />
				</form>
				<div className="results">
					< MovieReviews reviews = {this.state.reviews} />
				</div>
			</div>
		)
	}

}

