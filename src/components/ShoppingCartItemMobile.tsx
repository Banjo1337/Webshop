import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import { ProductInCart } from "./Models";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
interface Props {
  product: ProductInCart;
}

export default function ShoppingCartItemMobile({ product }: Props) {
  const { removeFromCart, addToCart, removeAllQuantitiesFromCart } = useCart();
  return (
    <Box
      sx={{ height: "10rem", display: "flex", justifyContent: "space-between", padding: "0 1rem" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          component='img'
          sx={{
            margin: "10px",
            width: "6rem",
            paddingRight: "1rem",
          }}
          src={product.image}
        />

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography variant='subtitle1' component='p'>
            {product.author}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            {product.title}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            {product.category}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            {product.price}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", "& > *": { alignSelf: "center" } }}>
        <Button onClick={() => addToCart(product)}>
          <AddCircleIcon />
        </Button>
        <Typography variant='subtitle1' component='p'>
          {product.number}
        </Typography>
        <Button onClick={() => product.number > 1 && removeFromCart(product)}>
          <RemoveCircleIcon />
        </Button>
        <DeleteIcon
          sx={{ color: "#F5425D", cursor: "pointer" }}
          onClick={() => removeAllQuantitiesFromCart(product)}
        />
      </Box>
    </Box>
  );
}
