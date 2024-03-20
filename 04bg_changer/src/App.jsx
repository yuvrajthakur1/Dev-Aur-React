import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
         <button className="outline-none px-4 bg-red-600 py-1 rounded-full shadow-lg " onClick={()=>{setColor("red")}} >red</button>
         <button className="outline-none px-4 bg-blue-600 py-1 rounded-full shadow-lg " onClick={()=>{setColor("blue")}}>Blue</button>
         <button className="outline-none px-4 bg-yellow-600 py-1 rounded-full shadow-lg " onClick={()=>{setColor("yellow")}}>Yellow</button>
         <button className="outline-none px-4 bg-pink-600 py-1 rounded-full shadow-lg " onClick={()=>{setColor("pink")}}>pink</button>
         <button className="outline-none px-4 bg-orange-600 py-1 rounded-full shadow-lg " onClick={()=>{setColor("orange")}}>orange</button>
         <button className="outline-none px-4 bg-gray-600 py-1 rounded-full shadow-lg " onClick={()=>{setColor("gray")}}>gray</button>
         <button className="outline-none px-4 bg-green-600 py-1 rounded-full shadow-lg " onClick={()=>{setColor("green")}}>green</button>
        </div>
        </div>

        
      </div>
    </>
  )
}

export default App
