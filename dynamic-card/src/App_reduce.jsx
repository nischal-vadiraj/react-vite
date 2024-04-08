import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BOOKS = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71qMW72Z6SL.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel set in the American South during the 1930s that deals with the issues of racial injustice and moral growth.",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKbL.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel set in a future where a totalitarian regime monitors every action.",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/61vwzVXaA7L.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel of manners set in early 19th-century England, featuring Elizabeth Bennet and Mr. Darcy.",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/91vdb7pAKkL.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A novel narrated by a teenager who has been expelled from prep school and wanders around New York City.",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71IF6-o4jwL.jpg",
  },

];

const App = () => (
  <div className="container">
    {BOOKS.map((book, index) => (
      <div key={index} className="card">
        <Book {...book} />
      </div>
    ))}
  </div>
);

const Book = ({ title, author, description, coverUrl }) => (
  <div className="book">
    <img className="cover" src={coverUrl} alt={title} />
    <div className="info">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default App;