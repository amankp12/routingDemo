import React from 'react'
import ActionMovies from './ActionMovies'
import AdventureMovies from './AdventureMovies'
import ComedyMovies from './ComedyMovies'
import DramaMovies from './DramaMovies'
import RomanticMovies from './RomanticMovies'

function MovieList() {
  return (
    <div className='movie-list'>
      <ActionMovies />
      <AdventureMovies />
      <ComedyMovies  />
      <DramaMovies  />
      <RomanticMovies />
    </div>
  )
}

export default MovieList