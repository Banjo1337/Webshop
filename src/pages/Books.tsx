import { Button } from "@mui/material";
import { useState } from "react";
import BookCard from "../components/BookCard";
import ButtonGroup from "../components/ButtonGroup";
import { mockedProducts } from "../data";

function Books() {
  const [books] = useState(mockedProducts);
  const [categoryFilter, setCategoryFilter] = useState("");
  const categories = [...new Set(mockedProducts.map((book) => book.category))];
  const buttons = [
    <Button key={-1} onClick={() => setCategoryFilter("")}>
      Alla böcker
    </Button>,
    categories.map((c) => (
      <Button key={categories.indexOf(c)} onClick={() => setCategoryFilter(c)}>
        {c}
      </Button>
    )),
  ];

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "lightblue",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: ".4rem",
        }}
      >
        <ButtonGroup>{buttons}</ButtonGroup>
      </div>
      <div
        style={{
          background: "lightyellow",
          display: "flex",
          flexWrap: "wrap",
          flex: 9,
        }}
      >
        {books
          .filter((b) =>
            b.category.toLowerCase().includes(categoryFilter.toLowerCase())
          )
          .map((book) => (
            <div
              key={book.id}
              style={{
                padding: ".5rem",
              }}
            >
              <BookCard book={book} />
            </div>
          ))}
      </div>
    </main>
  );
}

export default Books;
