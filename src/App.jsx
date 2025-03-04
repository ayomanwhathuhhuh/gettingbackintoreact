import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Navbar'>
        <button className='MainMenuButton'>
          <div className='MenuLine1'></div>
          <div className='MenuLine2'></div>
          <div className='MenuLine3'></div>
        </button>
        <div className='AllCashStats'>
          <div className='CashLabel'>$500</div>
          <div className='CashReserve'>
            <div className='FillPercentage'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
