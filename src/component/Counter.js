import { useState } from "react"
import React from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
    const increment = () => {
      setCount(count+1)
    }
    const decrement = () => {
      setCount(count-1)
    }
    return (
      <div >
        <h1 style={{background:"pink"}}>{count}</h1>
        <div style={{display:"flex",flexDirection:"colum",textAlign:"centre",}}>
        <button style={{margin:"auto 15px",display:"flex",flexDirection:"row",textAlign:"centre",background:"red"}} onClick={increment}>increment++</button>
        <button style={{margin:"auto 15px",display:"flex",flexDirection:"row",background:"green"}} onClick={decrement}>decrement--</button>
        </div>
      </div>
    )
  }

export default Counter