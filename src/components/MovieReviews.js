import React from 'react'

const MovieReviews = props => {
    return (
        <div className="review-list">
            {props.reviews.map(review => 
                <div className="review">
                    <h3>{review.display_title}</h3>
                    <h4>{review.headline}</h4>
                    <p>{review.summary_short}</p>
                </div>
            )}
        </div>
    )
}

export default MovieReviews
