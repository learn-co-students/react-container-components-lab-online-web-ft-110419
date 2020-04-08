import React from 'react';

const MovieReviews = (props) => 
    <div className="review-list">
        {props.reviews.map(movie => 
        <div className="review">
            <h2>{movie.display_title}</h2>
            <h3>{movie.byline}</h3>
            <p>{movie.headline}</p>
        </div>)}
    </div>;

export default MovieReviews
