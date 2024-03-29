//React component - accepts an object called props as the input. 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MyHobby = ({hobby}) => <h1>My hobby is {hobby}.</h1>;

const Introduction = ({name}) => <h1>My name is {name}.</h1>;

const App = () => (
<div>
  <h1>Hello</h1>
  <Introduction name="cdc" />
  <MyHobby hobby="coding" />
</div>
);

export default App
