import React from 'react'
import Counter from './counter/Counter'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Movies from './movies/Movies'

const App = () => {
  return (
    <div>
     <Header />
      <Routes>
        <Route path = '/' element={<Counter/>}></Route>
        <Route path = '/Movies' element={<Movies/>}></Route>
      </Routes> 
    </div>
  )
}

export default App
