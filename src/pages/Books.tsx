import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import ShopButton from "../components/ShopButton";
import { mockedProducts } from "../data";

function Books() {
  const [books] = useState(mockedProducts);

  return (
    <main
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        padding: "1rem",
        maxWidth: "100rem",
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
            <CardMedia
              component="img"
              height="300"
              image={book.image}
              alt={book.title + " cover"}
            />
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
              <ShopButton>{book.price} kr</ShopButton>
            </CardContent>
          </Card>
        </div>
      ))}
    </main>
  );
}

export default Books;
