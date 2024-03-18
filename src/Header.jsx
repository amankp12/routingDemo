import React from 'react'
import { Link } from 'react-router-dom'
import Movies from './movies/Movies'
import Counter from './counter/Counter'

const Header = () => {
  return (
    <Header>
        <nav>
            <button>
                <Link to='/'>Counter</Link>
            </button>
            <button>
                <Link to='/Movies'>Movies</Link>
            </button>
        </nav>
    </Header>
  )
}

export default Header
