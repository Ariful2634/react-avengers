
import { useState } from 'react'
import './App.css'
import Cart from './components/cart/Cart'
import Clause from './components/cart/Clause'

function App() {
  const [actorName, setActorName] = useState([])
  const [salary,setSalary]=useState(0)
  const [remaining,setRemaining]=useState(0);
  
  
  const clickHandler = (send) => {
    let count = send.salary;
   
    
    const isExist = actorName.find((ext) => ext.id == send.id)
    if (isExist) {
      return alert('Already Booked')
    }
    else {
      actorName.forEach(sal=>{
        count = count+sal.salary;
      })
      if(count>40000){
        return alert('Budget overload')
      }
      setSalary(count)
      
      const rem = 40000-count;
      setRemaining(rem)

      const san = [...actorName, send]
      setActorName(san)
      
    }
   
  }

  return (
    <>
     <div >
     <h1 className='text-4xl mb-10'>Avengers End Game</h1>
      <div className='md:flex justify-evenly'>
        <Cart clickHandler={clickHandler}></Cart>
        <Clause actorName={actorName} salary={salary} remaining={remaining} ></Clause>
      </div>
     </div>

    </>
  )
}

export default App
