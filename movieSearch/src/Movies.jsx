import React from "react";

const Movies = ({moviesList}) => {
    return (
        <div className="movie-list">
            {moviesList && moviesList.map((movie) => (
                <div className="movie-card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>Released : {movie.Year}</p>
                </div>
            ))}
        </div>
    )
}

export default Movies