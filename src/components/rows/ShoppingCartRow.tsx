import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Box, Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useCart } from "../../contexts/CartContext";
import { ProductInCart } from "../Models";

interface Props {
  product: ProductInCart;
}

function ShoppingCartRow({ product }: Props) {
  const { addToCart, removeFromCart, removeAllQuantitiesFromCart } = useCart();
  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });

  return (
    <React.Fragment>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align='right' sx={{ borderBottom: 0 }}>
          <Box
            component='img'
            sx={{
              width: "40px",
            }}
            src={product.image}
          />
        </TableCell>
        <TableCell align='left' sx={{ display: "flex", flexDirection: "column", borderBottom: 0 }}>
          <Box sx={{ fontWeight: "bold" }}>{product.title}</Box>
          <Box>({product.category})</Box>
          <Box>{product.author}</Box>
        </TableCell>
        <TableCell align='center' sx={{ borderBottom: 0 }}>
          <Button
            onClick={() => addToCart(product)}
            sx={{ padding: ".2rem 0 0 0", minWidth: "38px" }}
          >
            <AddCircleIcon />
          </Button>
          <Button
            onClick={() => product.number > 1 && removeFromCart(product)}
            sx={{ padding: ".2rem 0 0 0" }}
          >
            <RemoveCircleIcon />
          </Button>
          <Box>
            <DeleteIcon
              sx={{ color: "#F5425D", cursor: "pointer" }}
              onClick={() => removeAllQuantitiesFromCart(product)}
            />
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='right' sx={{ paddingRight: "0" }}>
          {formatter.format(product.price)}/st
        </TableCell>
        <TableCell align='center' sx={{ paddingRight: "0" }}>
          <Box>Antal: {product.number}</Box>
        </TableCell>
        <TableCell sx={{ paddingRight: "0" }}>{product.price * product.number} kr</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default ShoppingCartRow;
