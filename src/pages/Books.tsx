import { useState } from "react";
import { mockedProducts } from "../data";

function Books() {
  const [books, setBooks] = useState(mockedProducts);

  return (
    <main>
      {books.map((book) => (
        <div key={book.id}>
          <img src={book.image} alt={book.title} />
          <h4>{book.title}</h4>
        </div>
      ))}
    </main>
  );
}

export default Books;
