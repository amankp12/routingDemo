import React from "react";
import MovieData from "./MovieData";

const AdventureMovies = () => {
    return (
        <div>
            <h2 style={{ color: "white"}}>Adventure</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {MovieData.filter(movie => movie.url.includes('/Adventure/')).map((movie, index) => (
                    <div key={index} style={{ margin: '10px', textAlign: 'center' , color: "white"}}>
                        <img src={movie.url} alt={movie.title} style={{ maxWidth: '225px', maxHeight: '225px' }} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdventureMovies;