import './App.css'

// Using filter() from JS

const BOOKS = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    isActive: true,
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71qMW72Z6SL.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel set in the American South during the 1930s that deals with the issues of racial injustice and moral growth.",
    isActive: true,
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKbL.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel set in a future where a totalitarian regime monitors every action.",
    isActive: true,
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/61vwzVXaA7L.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel of manners set in early 19th-century England, featuring Elizabeth Bennet and Mr. Darcy.",
    isActive: true,
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/91vdb7pAKkL.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A novel narrated by a teenager who has been expelled from prep school and wanders around New York City.",
    isActive: true,
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71IF6-o4jwL.jpg",
  },
];

const App = () => {
  const activeBooks = BOOKS.filter(book => book.isActive);

  return (
    <div style={{ display: "flex" }}>
      {activeBooks.map(book => (
        <Book {...book} />
      ))}
    </div>
  );
};

const Book = ({ title, author, description, coverUrl }) => (
  <div
    style={{
      border: "1px solid black",
      width: 200,
      margin: 10,
      padding: 10,
      borderRadius: 5,
    }}
  >
    <img alt={title} src={coverUrl} style={{ width: "100%" }} />
    <div style={{ marginTop: 10 }}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default App;
