import { useState } from 'react'  //ye impoert ho raha hei hokkk ye hook humari react ki state ko change karne ke liye hota hei

import './App.css'



 

  

function App() 

{
  
let [counter,setCounter]=  useState(15)


  // let counter = 15;



  const addValue= ()=>
{
  // console.log("value added",Math.random())

  if(counter<25)
  {
  setCounter(counter+1)
  }
}

const removeValue=()=>
{
  if(counter>0)
  {
  setCounter(counter-1);
  }
}



  return (
    
    <>
      <h1>Dev With Vite</h1>

      <h2>Counter Value: {counter}</h2>

      <button
  
      onClick={addValue}>Add Value:{counter}


      </button>

      <br/>

      <button
      
      onClick={removeValue}>Remove Value:{counter}</button>

      <h2>Footer:{counter}</h2>
      </>
  )
}

export default App
