import React from 'react'
import MovieReview from './MovieReview.js'

const MovieReviews = (props) => {
	return (<ol className="review-list">
				{props.reviews.map(review => <MovieReview review={review}/>)}
			</ol>
			)
}

export default MovieReviews;

