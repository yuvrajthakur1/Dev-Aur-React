import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


function myApp()
{
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));//Creating root for Virtual DOM tree


root.render( 
  
    <myApp />
  
);

