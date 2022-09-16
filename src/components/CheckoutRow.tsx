import { Box, TableCell, TableRow } from "@mui/material";
import useFallBackImage from "../hooks/useFallBackImage";
import getFormattedCurrency from "../utils/getFormattedCurrency";
import { ProductInCart } from "./Models";

interface Props {
  product: ProductInCart;
}
export default function CheckoutRow({ product }: Props) {
  return (
    <TableRow key={product.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align='right'>
        <Box
          component='img'
          sx={{
            width: "40px",
          }}
          src={useFallBackImage(product.image)}
        />
      </TableCell>
      <TableCell component='th' scope='row'>
        <b>{product.title}</b> ({product.category}) <br />
        {product.author}
        <br />
        Antal: {product.number}
      </TableCell>
      <TableCell align='left'>{getFormattedCurrency(product.price)}</TableCell>
    </TableRow>
  );
}
