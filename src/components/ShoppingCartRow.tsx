import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Box, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useCart } from "../contexts/CartContext";

import useFallBackImage from "../hooks/useFallBackImage";
import getFormattedCurrency from "../utils/getFormattedCurrency";
import { ProductInCart } from "./Models";

interface Props {
  product: ProductInCart;
}

function ShoppingCartRow({ product }: Props) {
  const { addToCart, removeFromCart, removeAllQuantitiesFromCart } = useCart();

  return (
    <React.Fragment>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align='right' sx={{ borderBottom: 0 }}>
          <Box
            component='img'
            sx={{
              width: "40px",
            }}
            src={useFallBackImage(product.image)}
          />
        </TableCell>
        <TableCell align='left' sx={{ display: "flex", flexDirection: "column", borderBottom: 0 }}>
          <Box sx={{ fontWeight: "bold" }}>{product.title}</Box>
          <Box>({product.category})</Box>
          <Box>{product.author}</Box>
        </TableCell>
        <TableCell align='left' sx={{ borderBottom: 0 }}>
          <AddCircleIcon
            onClick={() => addToCart(product)}
            sx={{ padding: ".2rem", color: "#4477FF", cursor: "pointer" }}
          />
          <RemoveCircleIcon
            sx={{ padding: ".2rem", color: "#44CC77", cursor: "pointer" }}
            onClick={() => product.number > 1 && removeFromCart(product)}
          />
          <DeleteIcon
            sx={{ padding: ".2rem", color: "#F5425D", cursor: "pointer" }}
            onClick={() => removeAllQuantitiesFromCart(product)}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='right' sx={{ paddingRight: "0" }}>
          {getFormattedCurrency(product.price)}/st
        </TableCell>
        <TableCell align='center' sx={{ paddingRight: "0" }}>
          <Box>Antal: {product.number} st</Box>
        </TableCell>
        <TableCell sx={{ paddingRight: "0" }}>{product.price * product.number} kr</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default ShoppingCartRow;
