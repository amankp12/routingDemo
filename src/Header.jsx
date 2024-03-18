import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav>
            <li>
                <button>
                    <Link to='/accordion'>Accordion</Link>
                </button>
                <button>
                    <Link to='/bg-color-changer'>Background Color Changer</Link>
                </button>
                <button>
                    <Link to='/todo'>Todo List</Link>
                </button>
                <button>
                    <Link to='/ue'>useEffect Demo</Link>
                </button>
                <button>
                    <Link to='/counter'>Counter</Link>
                </button>
            </li>
        </nav>
      
    </div>
  )
}

export default Header
