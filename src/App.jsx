import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function blah() {
    console.log("hi");
    return 0;
  }
  function blah2() {
    console.log("bye")
  }
  return (
    <>
      <div className='Navbar'>
        <button className='MainMenuButton'>
          <div className='MenuLine1'></div>
          <div className='MenuLine2'></div>
          <div className='MenuLine3'></div>
        </button>
        <div className='AllCashStats'>
          <div className='CashLabel'>+$500</div>
          <div className='CashReserve' onMouseEnter={blah} onMouseLeave={blah2}>
            <div className='FillPercentage'></div>
          </div>
        </div>
      </div>
      <div className='Tooltips'>
        <div className='CashReserveTooltip'>
          <first>1000/500</first>
          <second>(10%)</second>
        </div>
      </div>
    </>
  )
}

export default App
