import React from 'react'
const MovieReview = (props) => {
	return(
		<li className="review">
			<br />
			<ul>
				<li>Movie Title: {props.review.display_title}</li> 
				<li>Article Title: <i>{props.review.headline}</i></li>
				<li> Critic's Pick? {props.review.critics_pick === 1 ? "Yes" : "No"} </li>
				<li>Link: <a href={props.review.link.url}>Link</a></li>
			</ul>
		</li>
	)
}

export default MovieReview