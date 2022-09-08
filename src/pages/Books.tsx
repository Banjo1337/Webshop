import { Autocomplete, Grid, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SyntheticEvent, useState } from "react";
import BookCard from "../components/BookCard";
import ShopButton from "../components/ShopButton";
import { useProduct } from "../contexts/ProductContext";

function Books() {
  const { products: books } = useProduct();
  const [searchFilters, setSearchFilters] = useState({ category: "", title: "" });
  const categories = [...new Set(books.map((book) => book.category))];

  const handleChange = (event: SelectChangeEvent) => {
    setSearchFilters((prevState) => ({ ...prevState, category: event.target.value }));
  };

  function handleSearchChange(value: string) {
    setSearchFilters((prevState) => ({ ...prevState, title: value }));
  }

  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", margin: "1rem 1rem" }}>
        <Autocomplete
          disablePortal
          id='searchField'
          options={books.map((p) => p.title).sort((a, b) => a.localeCompare(b))}
          sx={{ marginTop: "1rem" }}
          renderInput={(params) => <TextField {...params} label='Book' />}
          onInputChange={(_, value) => handleSearchChange(value)}
          value={searchFilters.title}
          freeSolo={true}
        />
        <FormControl variant='standard' sx={{ m: "1rem 0" }}>
          <InputLabel id='simple-select-standard-label'>Välj en kategori</InputLabel>
          <Select
            labelId='simple-select-standard-label'
            id='simple-select-standard'
            value={searchFilters.category}
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
            .filter((b) => b.category.toLowerCase().includes(searchFilters.category.toLowerCase()))
            .filter((b) => b.title.toLowerCase().includes(searchFilters.title.toLowerCase()))
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
