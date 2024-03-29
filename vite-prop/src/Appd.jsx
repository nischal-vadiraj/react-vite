//Passing object as prop

const Book = ({
    details
  }) => (
    <div>
      <h2>{details.title}</h2>
      <p>Author: {details.author}</p>
      <p>Genre: {details.genre}</p>
    </div>
  );
  
  const App = () => (
    <div>
      <h1>Book Recommend</h1>
      <Book
        details={{
          title: "star wars",
          author: "galaxy",
          genre: "Fantasy",
        }}
      />
    </div>
  );
  
  export default App;

