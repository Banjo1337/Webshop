import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShopButton from "../components/ShopButton";
import { mockedProducts } from "../data";

function Books() {
  const [books] = useState(mockedProducts);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const categories = [...new Set(books.map((book) => book.category))];

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
        {categories.map((category) => (
          <div key={categories.indexOf(category)}>
            <h4 style={{ margin: 0, padding: ".5rem" }}>{category}</h4>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "lightyellow",
          display: "flex",
          flexWrap: "wrap",
          flex: 7,
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              padding: ".5rem",
            }}
          >
            <Card
              sx={{
                maxWidth: "12rem",
                minHeight: "30rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link to={`/book/${book.id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={book.image}
                  alt={book.title + " cover"}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="body2">
                  {book.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ paddingBottom: ".3rem" }}
                >
                  {book.author}
                </Typography>

                <ShopButton product={book}>{book.price} kr</ShopButton>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Books;
