// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {

    function renderReview(review){
        return(
            <div className="review">
                <h3>{review.display_title}</h3>
            </div>
        )
    }

    return (
        <div className="review-list">
            {reviews.map(review => renderReview(review))}
        </div>
    )
}

export default MovieReviews;