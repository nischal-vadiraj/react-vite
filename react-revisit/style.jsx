//React CSS Styles

// Passing the styles as an object
const color = {
    color: 'blue',
    background: 'sky'
  };
  <h1 style={color}>Hello</h1>
  
  // Passing the styles with an inline object, as a shorthand
  <h1 style={{ color: 'red' }}>I am red!</h1>

//Style Names And Values

// Styles in CSS:
// font-size: 20px;
// color: blue;

// Would look like this style object in React:
const style = {
    fontSize: 20,
    color: 'blue',
  };