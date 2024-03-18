import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Counter from '../counter/src/App'
import Accordion from '../accordion/src/App.jsx'
import Bgcolorchanger from '../background-color-changer/src/App'
import Todo from '../todo1/src/App.jsx'
import UseEffect from '../useEffect_Demo/src/App.jsx'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        
        <Route path = '/accordion' element = {<Accordion />}></Route>
        <Route path = '/bg-color-changer' element = {<Bgcolorchanger />}></Route>
        <Route path = '/todo' element = {<Todo />}></Route>
        <Route path = '/ue' element = {<UseEffect />}></Route>
        <Route path = '/counter' element = {<Counter />}></Route>
      </Routes>
    </>
  )
}

export default App
