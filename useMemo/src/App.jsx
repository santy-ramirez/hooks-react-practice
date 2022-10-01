import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(1)

  const countMemo = (() => { sumarC2() }, [count])

  const sumarC2 = () => {
    return setCount2(count2 + 1);
  }
  const sumarC1 = () => {
    console.log("rendirizo")
    return setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>hello useMemo</h1>
      <div>coun</div>
      <div>  {count}</div>
      <button onClick={sumarC1} >sumar count</button>
      <div>{countMemo} </div>
      <div>count 2:</div>
      <div>{count2}</div>
      <button onClick={sumarC2} >sumar coun 2</button>


    </div>
  )
}

export default App
