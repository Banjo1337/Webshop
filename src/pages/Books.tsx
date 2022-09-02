import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { mockedProducts } from "../data";

function Books() {
  const [books] = useState(mockedProducts);

  return (
    <main style={{ display: "flex", gap: "1rem" }}>
      {books.map((book) => (
        <div key={book.id}>
          <Link to={`/book/${book.id}`}>
            <img src={book.image} alt={book.title + " cover"} />
          </Link>
          <h4>{book.title}</h4>
        </div>
      ))}
    </main>
  );
}

export default Books;
