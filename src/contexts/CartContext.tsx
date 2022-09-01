import { createContext, useState, ReactNode, useContext } from "react";
import { Book } from "../data";

interface ContextValue {
  cart: Book[];
  addToCart: (book: Book) => void;
  removeFromCart: (book: Book) => void;
}

const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface Props {
  children: ReactNode;
}

function CartProvider({children}: Props) {
  const [cart, setCart] = useState<Book[]>([]);

  const addToCart = (book: Book) => {
    //TODO
  };
  const removeFromCart = (book: Book) => {
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
