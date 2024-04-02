//conditional rendering - if else branching

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Book = ({ isFavorite, name }) => {
  if (isFavorite) {
    return <li>{name} STAR</li>;
  }

  return <li>{name}</li>;
};

const BookList = () => (
  <ul>
    <Book isFavorite name="book abc" />
    <Book name="book xyz" />
  </ul>
);

//same exmpale using ternery operater

const Book = ({ isFavorite, name }) => (
  <li>{isFavorite ? `${name}  STAR` : name}</li>
);

const BookList = () => (
<ul>
  <Book isFavorite name="book abc" />
  <Book name="book xyz" />
</ul>
);

//using the && - logical AND operator

const Book = ({ isFavorite, name }) => (
  <li>
    {name} {isFavorite && "⭐️"}
  </li>
);

const BookList = () => (
  <ul>
    <Book isFavorite name="Psychology of Money" />
    <Book name="Rich dad, poor dad" />
  </ul>
);


export default BookList;  

