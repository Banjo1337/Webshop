import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
        padding: "1rem",
      }}
    >
      {books.map((book) => (
        <div key={book.id} style={{ padding: ".5rem" }}>
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
