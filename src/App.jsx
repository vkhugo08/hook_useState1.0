import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const plusOne = () => {
    setCount(count + 1)
  }

  const minusOne = () => {
    setCount(count - 1)
  }

  const resetCount = () => setCount(0)
    
 
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={plusOne}>+1</button>
      <button onClick={resetCount}>reset</button>
      <button onClick={minusOne}>-1</button>
    </div>
  )
}

export default App
