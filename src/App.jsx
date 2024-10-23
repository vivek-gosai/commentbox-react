import { useState } from 'react'
import './App.css'
import Com from './components/Com'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Com />
    </>
  )
}

export default App
