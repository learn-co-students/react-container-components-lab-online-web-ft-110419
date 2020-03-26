import React from 'react';
import Movie from './Movie'

const defaultPoster = 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'

const MovieReviews = ({reviews}) => {
  return (
  <div className='review-list'>
    {reviews.map((review, idx) => {
        let {display_title, summary_short, multimedia} = review
        return <Movie
                  key={idx}
                  title={display_title}
                  summary={summary_short}
                  src={multimedia ? multimedia.src : defaultPoster}
                />
        })
    }
  </div>
  )
}
export default MovieReviews
