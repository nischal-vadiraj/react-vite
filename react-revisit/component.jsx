//Importing React
import React from 'react';

//React Components
function MyFunctionComponent() {
    return <h1>Hello from a function component!</h1>;
  }
  
  class MyClassComponent extends React.Component {
    render() {
      return <h1>Hello from a class component!</h1>;
    }
  }

//Exporting Components in React
function Greeting() {
    return (
      <>
        <h1>Hello, welcome to...</h1>
        <h2>Learn React!</h2>
      </>
    );
  }
  
  export default Greeting;

//Rendering a Component

//Component to be rendered
function MyComponent() {
    return <h1>Hello, World!</h1>
  }
  
  //Rendering the component
  ReactDOM.createRoot(
    document.getElementById('app')
  ).render(<MyComponent />);

//Multi-line JSX Expressions
return (
    <blockquote>
      <p>Be the change you wish to see in the world.</p>
      <cite>
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Mahatma_Gandhi"
        >
          Mahatma Gandhi
        </a>
      </cite>
    </blockquote>
);

//Logic Before return
function Integer() {
    const value = 3.14;
    const asInteger = Math.round(value);
    return <p>{asInteger}</p>;
  }