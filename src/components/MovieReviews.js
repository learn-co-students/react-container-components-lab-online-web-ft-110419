// Code MovieReviews Here
import React from 'react'

const Review = ({ display_title, link, summary_short }) => {
    return (
        <div className="review">
            <header>
                <a className="review-link" href={link.url}>{display_title}</a>
                <br />
            </header>
            <p>{summary_short}</p>
        </div>
    );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
}

    export default MovieReviews