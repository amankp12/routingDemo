import { useEffect } from "react";
import './App.css'
import { useState } from "react";
import Movies from "./Movies";

function App(){
  const [searchTerm, setSearchTerm] = useState('')
  const [moviesList, setMoviesList] = useState([])

 useEffect(() => {
  async function fetchData(){
    const res  = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e3277b8e`)

    const data = await res.json()
  
    setMoviesList(data.Search)
  }
  if(searchTerm){
  fetchData();
  }
}, [searchTerm])

const handleSearchClick = () => {
  if(searchTerm.trim() !== ""){
    setSearchTerm(searchTerm.trim())
  }
}

return (
  <div className="container">
    <div className="input-container">
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
    <div className="movie-list">
      <Movies moviesList={moviesList} />
    </div>
  </div>
);
}

export default App