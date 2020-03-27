// Code MovieReviews Here
import React from 'react';

const Review = ({
    headline,
    summary_short,
    link
    }) => {
        return (
        <div key={headline} className="review">
        <h2>{headline}</h2>
        <a href='{link.url}'>Read Here</a>
        <p>{summary_short}</p>
        </div>
     );
    }

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;