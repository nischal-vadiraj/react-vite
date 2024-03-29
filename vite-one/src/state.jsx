// state - set of data that is managed by the component

import { useState } from 'react' //for state management hook 

useState() //accepts initial value of the state and returns array containing the state variable

setCount() //function that updates the state variable

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  )
}

const [count, setCount] = useState(0) //create as many state variables as you want
const [name, setName] = useState('John') 



