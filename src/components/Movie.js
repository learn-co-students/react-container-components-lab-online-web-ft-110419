import React from 'react';

const Movie = ({title, summary, src}) =>
  <div className='review'>
    <h2>{title}</h2>
    <img src={src} alt='movie-poster'/>
    <p>{summary}</p>
    <br/>
  </div>

export default Movie