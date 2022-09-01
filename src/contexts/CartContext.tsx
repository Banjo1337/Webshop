import { createContext, useState, ReactNode, useContext } from "react";
import { Product } from "../components/Models";

interface ContextValue {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    //TODO
  };
  const removeFromCart = (product: Product) => {
    //TODO
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
