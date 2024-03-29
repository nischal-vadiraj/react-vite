//embedding js in jsx

//example 1

import './App.css'

function App0() {
  const message = 'heyyy' //variblae 

  return ( //embed js within {}
    <div className='App0'> 
      <h1>{message}</h1> 
    </div>
  )
}

export default App0

//exmaple 2 

import './App.css'

function App1() {
  const message = 'Hello'

  return ( //embed ternery operator
    <div className='App1'>
      <h1>{message === 'Hello' ? 'correct' : nope}</h1> 
    </div>
  )
}

export default App1


