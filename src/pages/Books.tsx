import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShopButton from "../components/ShopButton";
import { mockedProducts } from "../data";

function Books() {
  const [books] = useState(mockedProducts);

  return (
    <main
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
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
    </main>
  );
}

export default Books;
