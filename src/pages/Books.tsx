import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import BookCard from "../components/BookCard";
import ShopButton from "../components/ShopButton";
import { mockedProducts } from "../data";

function Books() {
  const [books] = useState(mockedProducts);
  const [categoryFilter, setCategoryFilter] = useState("");
  const categories = [...new Set(mockedProducts.map((book) => book.category))];
  const handleChange = (event: SelectChangeEvent) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", margin: "1rem 1rem" }}>
        <FormControl variant='standard' sx={{ m: "1rem 0" }}>
          <InputLabel id='demo-simple-select-standard-label'>Välj en kategori</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={categoryFilter}
            onChange={handleChange}
            label='Category'
          >
            <MenuItem value=''>Alla böcker</MenuItem>
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Grid container spacing={1}>
          {books
            .filter((b) => b.category.toLowerCase().includes(categoryFilter.toLowerCase()))
            .map((book) => (
              <Grid key={book.id} item xs={6} sm={4} md={2} lg={2} xl={2}>
                <BookCard book={book}>
                  <ShopButton product={book}>{book.price} kr</ShopButton>
                </BookCard>
              </Grid>
            ))}
        </Grid>
      </div>
    </main>
  );
}

export default Books;
