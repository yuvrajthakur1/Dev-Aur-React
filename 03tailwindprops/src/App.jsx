import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'





function App() {
  


  return (

    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind Test</h1>
      
     <Card  userName="About mac" btn="Visit me"/>
     <Card userName="About lenovo"/>

     </>

  )
}

export default App
