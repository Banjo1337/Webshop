import { Button, ButtonGroup, Grid } from "@mui/material";
import { useState } from "react";
import BookCard from "../components/BookCard";
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
    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", marginTop: "50px" }}>
      <ButtonGroup sx={{ display: "flex", flexDirection: "row" }}>{buttons}</ButtonGroup>
      <Grid container spacing={1}>
        {books
          .filter((b) => b.category.toLowerCase().includes(categoryFilter.toLowerCase()))
          .map((book) => (
            <Grid key={book.id} item xs={4} sm={3} md={2} lg={1.5}>
              <BookCard book={book}>
                <ShopButton product={book}>{book.price} kr</ShopButton>
              </BookCard>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Books;
