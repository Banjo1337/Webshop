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
    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", marginTop: "45px" }}>
      <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
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
            <Grid key={book.id} item xs={4} sm={3} md={2} lg={1.5} xl={1}>
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
