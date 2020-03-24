import React from 'react';

const MovieReviews = props => {
	const reviews = props.reviews.map((review, index) => {
		return (
			<div key={index} className="review" style={{margin: "5px", padding: "5px", borderRadius: "5px", backgroundColor: "#ccc"}}>
				<h3 style={{margin: "0"}}>{review.display_title}</h3>
				<h5>Reviewed by: {review.byline}</h5>
				<i>"{review.summary_short}"</i>
			</div>
		)
	});

	return (
		<div className="review-list">
			{reviews}
		</div>
	)
}

export default MovieReviews;
