import { useState } from 'react'
import './App.css';
import Index from "./pages/Index";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index />
    </>
  )
}

export default App
