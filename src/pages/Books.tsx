import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShopButton from "../components/ShopButton";
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
        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
          >
            {buttons}
          </ButtonGroup>
        </Box>
        {/* <ButtonGroupOrientation /> */}
      </div>
      <div
        style={{
          background: "lightyellow",
          display: "flex",
          flexWrap: "wrap",
          flex: 7,
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
