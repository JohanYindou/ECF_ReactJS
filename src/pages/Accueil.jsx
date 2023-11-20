import { useState } from 'react'
import '../styles/App.css'
import Navigation from '../components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      
    </>
  )
}

export default App
