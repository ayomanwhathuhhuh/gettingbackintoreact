import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar'>
        <button>Menu?</button>
        <div className='Cash Reserve'>
              1/1000
        </div>
      </div>
    </>
  )
}

export default App
