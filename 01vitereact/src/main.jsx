import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function MyApp()
{
  return(
    <div>
      <h1>This is myDev</h1>
    </div>
  )
}


//important:- the way we have used in custom react and we have created the reactelement will not work here

//Below is the method which will work here

// const anotherElement=(
//   <a>Hello Another </a>
// )




//Here is inbuilt method in react for creating elements (React.createElement)

//how to inject varibale in React.createElement
 
 const anotherUser="Harish ";


const reactElement= React.createElement
(
  //here first parameter is type of element,2. properties of element{1:"",2:""},at the end there willl be actual text

  'a',
  {href:"http://google.com",target:'_blank'}
  ,'Click me to see output'
  ,anotherUser
)

//here in dom tree of any element comes after the children and we can directly write the name of variable 


ReactDOM.createRoot(document.getElementById('root')).render(
  

    <App/>
      
)
