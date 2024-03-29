//this file is the first react component 


import { useState } from 'react' //for state management
import reactLogo from './assets/react.svg' //
import viteLogo from '/vite.svg' 
import './App.css' //

/* 
function App() { //named function - errors will be clear
  return p>test</p>
} 
*/

/*
const App = () => {  //also with arrow function
  return <p>test</p>
}
*/

function WelcomeMessage() { //component as a function - child component
  return <h1>hey everyone</h1>
}

function App() { //parent component
  return (// className not class
    <div className='App'>  
      <WelcomeMessage />
    </div>
  )
}

export default App
