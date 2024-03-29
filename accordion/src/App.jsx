import React from "react";
import './App.css'
import { useState } from "react";

function App(){
  const [ selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item , i) => (
          <div className="item">

            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.name}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>

            <div className={selected === i ? 'content show' : 'content'}>
              {item.email}
            </div>
          </div>

        ))}


      </div>
    </div>
  )
}

const data = [
    {
      name: 'John Doe',
      email: 'john@gmail.com'
    },
    {

      name: 'John Doe',
      email: 'john@gmail.com'
    },
    {
      name: 'John Doe',
      email: 'john@gmail.com'
    },
    {
      name: 'John Doe',
      email: 'john@gmail.com'
    }
]

export default App