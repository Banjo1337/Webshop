import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Button from "@mui/material/Button";
import { ReactNode } from "react";
import { useCart } from "../contexts/CartContext";

interface Props {
  children: ReactNode;
}

const ShopButton = ({ children }: Props) => {
  const { addToCart } = useCart();

  return (
    <div>
      <Button
        endIcon={<LocalGroceryStoreIcon />}
        variant="contained"
        color="error"
        size="large"
        onClick={() => addToCart}
      >
        {children}
      </Button>
    </div>
  );
};

export default ShopButton;
