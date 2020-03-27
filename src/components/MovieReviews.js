// Code MovieReviews Here
import React from 'react'
import { render } from 'enzyme'

const MovieReviews = ( props) => { 


    const helperFuncs = {
        list: () => props.reviews.map(rev => <div key={rev.headline} className="review">{rev.headline}</div>)
      };
    
      return <div className="review-list">{helperFuncs.list()}</div>;
};
export default  MovieReviews 