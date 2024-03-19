import { useState } from 'react'  //ye impoert ho raha hei hokkk ye hook humari react ki state ko change karne ke liye hota hei

import './App.css'



 

  

function App() 

{
  
let [counter,setCounter]=  useState(15)


  // let counter = 15;



  const addValue= ()=>
{
  // console.log("value added",Math.random())

    setCounter((prevCounter)=>
    
      prevCounter +1
    )
    setCounter((prevCounter)=>
    
      prevCounter +1
    )
    setCounter((prevCounter)=>
    
      prevCounter +1
    )
    setCounter((prevCounter)=>
    
      prevCounter +1
    )
    setCounter((prevCounter)=>
    
      prevCounter +1
    )

// callback ke through aega to ek ek karke execute hoga aur value mei jump aega counter ki
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //repeat kar bhi denge to bhi ek baar mei ek hi value increment hogi 
    //it is because fibre algorithm jo hei sare counter ka ek batch bana ke processing ke liye bhejega insatantly nhi kareaga kuch bhi 

}

const removeValue=()=>
{
  
  setCounter(counter-1);
  
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
