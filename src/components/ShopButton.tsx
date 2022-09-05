import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Button from "@mui/material/Button";
import { ReactNode, useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import AddedToCartToast from "./AddedToCartToast";
import { Book } from "./Models";

interface Props {
  children: ReactNode;
  product: Book;
}

const ShopButton = ({ children, product }: Props) => {
  const [open, setOpen] = useState(() => false);
  const { addToCart } = useCart();

  useEffect(() => {
    return setOpen(false);
  }, [product])


  function handleClick() {
    addToCart(product);
    setOpen(true);
  }

  return (
    <div>
      <Button
        endIcon={<LocalGroceryStoreIcon />}
        variant="contained"
        color="error"
        size="large"
        onClick={handleClick}
      >
        {children}
      </Button>   

      <AddedToCartToast
        message={`${product.title} added to cart 🐸`}
        severity="success"
        open={open}
        setOpen={setOpen}
      />      
    </div>
  );
};

export default ShopButton;
