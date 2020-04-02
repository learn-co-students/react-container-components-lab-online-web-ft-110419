// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  function renderReview(review) {
    return (
      <div className="review">
        <h3>{review.display_title}</h3>
      </div>
    );
  }

  return (
    <div className="review-list">
      {props.reviews.map(review => renderReview(review))}
    </div>
  );
}

export default MovieReviews;