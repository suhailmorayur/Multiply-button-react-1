
import './App.css'
import { useState } from 'react';
function App() {
  
  const [number, setNumber] = useState(0)



  function count (){
    setNumber(number + 1)
  }

  return (
    <>
     <header></header>
     <main>
      <div className='div1'>
      <h1 className='number'> {number}</h1>
      <button className='count' onClick={count}>click</button>
      </div>
     </main>
     <footer></footer>
    </>
  )
}

export default App
