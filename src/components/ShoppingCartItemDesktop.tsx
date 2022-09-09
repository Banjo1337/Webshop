import { Box, Button, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useCart } from "../contexts/CartContext";
import { ProductInCart } from "./Models";
interface Props {
  product: ProductInCart;
}
export default function ShoppingCartItemDesktop({ product }: Props) {
  const { removeFromCart, addToCart, removeAllQuantitiesFromCart } = useCart();
  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  return (
    <TableRow key={product.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align='right'>
        <Box
          component='img'
          sx={{
            width: "40px",
          }}
          src={product.image}
        />
      </TableCell>
      <TableCell component='th' scope='row'>
        {product.title}
      </TableCell>
      <TableCell align='right'>{product.author}</TableCell>
      <TableCell align='right'>{product.category}</TableCell>
      <TableCell align='right'>{formatter.format(product.price)}</TableCell>
      <TableCell align='right'>
        <Button onClick={() => addToCart(product)}>
          <AddCircleIcon />
        </Button>
        {product.number}
        <Button onClick={() => product.number > 1 && removeFromCart(product)}>
          <RemoveCircleIcon />
        </Button>
      </TableCell>
      <TableCell align='right'>
        <DeleteIcon
          sx={{ color: "#F5425D", cursor: "pointer" }}
          onClick={() => removeAllQuantitiesFromCart(product)}
        />
      </TableCell>
    </TableRow>
  );
}
