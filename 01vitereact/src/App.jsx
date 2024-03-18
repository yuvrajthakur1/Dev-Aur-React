import Dev from "./dev.jsx"
  

//how to inject variable in function

function App() {
  const username="yuvraj thakur" ;
  // when we use variable we apply curly braces {name of variable } and it will work 
  return (
    <>
       <Dev/>
       <h1>Hello {username}</h1>  
    </>
   
  )
}

export default App
