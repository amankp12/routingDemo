import './counter.css'
import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  function add(){
    setCount(prevCount => Math.min(prevCount + 1, 25));
  }

  function sub(){
    setCount(prevCount => Math.max(prevCount - 1, 0));
  }

  return (
    <div className='app'>
      <p>Count : {count}</p>
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
      
    </div>
  )
}

export default Counter;