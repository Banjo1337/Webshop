import { createContext, useState, ReactNode, useContext } from "react";
import { ProductInCart } from "../components/Models";

interface ContextValue {
  cart: ProductInCart[];
  addToCart: (productInCart: ProductInCart) => void;
  removeFromCart: (productInCart: ProductInCart) => void;
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
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const addToCart = (productInCart: ProductInCart) => {
    setCart((prevState) => [...prevState, productInCart]);
  };
  const removeFromCart = (productInCart: ProductInCart) => {
    setCart((prevState) => prevState.filter((p) => p.id !== productInCart.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
