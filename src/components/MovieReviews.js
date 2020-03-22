import React from 'react'

const MovieReviews = props => {
    return (
        <div className="review-list">
            Latest Reviews List
            <div className="review">
                {props.fetchedResults.map(review => props.renderReview(review))}
            </div>
        </div>
    )
}

export default MovieReviews
