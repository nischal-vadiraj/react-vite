//Rules for Using Hooks

// Instead of confusing React with code like this:
if (userName !== '') {
    useEffect(() => {
      localStorage.setItem('savedUserName', userName);
    });
   }
   
   // We can accomplish the same goal, while consistently calling our hook every time:
   useEffect(() => {
    if (userName !== '') {
      localStorage.setItem('savedUserName', userName);
    }
   });

//Effect Hook
import React, { useState, useEffect } from 'react';
 
function TitleCount() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  
  return <button onClick={(prev) => setCount(prev + 1)}>+</button>;
}

//State Hook
const [currentState, stateSetter] = useState(initialState);

//Multiple State Hooks
function App() {
    const [sport, setSport] = useState('basketball');
    const [points, setPoints] = useState(31);
    const [hobbies, setHobbies] = useState([]);
   }
