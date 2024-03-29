//Handling user events

const handleClick = (event) => {
    window.alert('Button clicked');
  }
  
  function App() { //using onclick attribute 
    return <button onClick={handleClick}>Click here</button>
  }

// same example - function defined outside jsx

const handleClick0 = (event) => {
    window.alert('Button clicked');
  }
  
  function App() {
    return <button onClick={handleClick0}>Click here</button>
  }

