
import { useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Clause from './components/cart/Clause'

function App() {
  const [actorName, setActorName] = useState([])

  const clickHandler = (send) => {
    const isExist = actorName.find((ext) => ext.id == send.id)
    if (isExist) {
      return alert('Already Booked')
    }
    else {
      const san = [...actorName, send]
      setActorName(san)
    }
    // console.log(san)
  }

  return (
    <>
      <h1 className='text-4xl mb-10'>Avengers End Game</h1>
      <div className='md:flex justify-evenly'>
        <Cart clickHandler={clickHandler}></Cart>
        <Clause actorName={actorName}></Clause>
      </div>

    </>
  )
}

export default App
