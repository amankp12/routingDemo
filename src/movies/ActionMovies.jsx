import React from 'react'
import MovieData from './MovieData'
import './ActionMovies.css'

function ActionMovies() {
  return (
    <div>
    <h2>Action</h2>
    <div className='container'>
      {MovieData.filter(movie => movie.url.includes('/Action/')).map((movie, index) => (
        <div key={index} className='movie-item'>
            <img src={movie.url} alt={movie.title} />
            <p>{movie.title}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ActionMovies