import React from 'react'

const MovieReviews = props => {
    return (
        <div className="review-list">
            <div className="review">
                {props.reviews.map(review => props.renderReview(review))}
            </div>
        </div>
    )
}

export default MovieReviews
