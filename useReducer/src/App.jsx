import { useState, useReducer } from 'react'

import './App.css'

function App() {

  const countReducer = (state, action) => {
    console.log("---------reducer-----")
    console.log(state, action)
    switch (action) {
      case "sumar":
        return state + 1;
      case "restar":
        return state - 1
      default:
        throw new Error()
    }

  }
  const initialState = 0
  const [state, dispatch] = useReducer(countReducer, initialState);
  console.log(state, dispatch)

  return (
    <div className="App">
      <h2>state:{state} </h2>
      <button onClick={() => { dispatch("sumar") }}>sumar uno</button>
      <button onClick={() => { dispatch("restar") }}>restar uno</button>
    </div>
  )
}

export default App
