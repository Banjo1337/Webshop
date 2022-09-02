import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Button from "@mui/material/Button";
import { ReactNode } from "react";
import { useCart } from "../contexts/CartContext";
import { Product } from "./Models";

interface Props {
  children: ReactNode;
  product: Product;
}

const ShopButton = ({ children, product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div>
      <Button
        endIcon={<LocalGroceryStoreIcon />}
        variant="contained"
        color="error"
        size="large"
        onClick={() => addToCart(product)}
      >
        {children}
      </Button>
    </div>
  );
};

export default ShopButton;
