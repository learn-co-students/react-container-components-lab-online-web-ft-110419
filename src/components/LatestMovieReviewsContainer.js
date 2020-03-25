import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';

export default class SearchableMovieReviewsContainer extends React.Component {
	state = {
		reviews: []
	}

	componentDidMount() {
		fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`).then(response => response.json()).then(json => {
			this.setState({
				reviews: json.results
			})
		})
	}

	render() {
		return (
			<div className="latest-movie-reviews">
			<h2>Latest New York Times Movie Reviews</h2>
				< MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}
