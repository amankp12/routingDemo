import React from "react";
import MovieData from "./MovieData";

const ComedyMovies = () => {
    return (
        <div>
            <h2 style={{ color: "white"}}>Comedy</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {MovieData.filter(movie => movie.url.includes('/Comedy/')).map((movie, index) => (
                    <div key={index} style={{ margin: '10px', textAlign: 'center' , color: "white"}}>
                    <img src={movie.url} alt={movie.title} style={{ maxWidth: '225px', maxHeight: '225px' }} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComedyMovies;