import { createContext, useState, ReactNode, useContext } from "react";
import { Book, ProductInCart } from "../components/Models";

interface ContextValue {
  cart: ProductInCart[];
  addToCart: (product: Book) => void;
  removeFromCart: (product: Book) => void;
  removeAllQuantitiesFromCart: (product: Book) => void;
}

const CartContext = createContext<ContextValue>({} as ContextValue);

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const addToCart = (product: Book) => {
    if (cart.find((p) => p.id === product.id)) {
      setCart((prevState) =>
        prevState.map((p) => (p.id === product.id ? { ...p, number: p.number + 1 } : p)),
      );
    } else {
      setCart((prevState) => [...prevState, { ...product, number: 1 }]);
    }
  };

  const removeAllQuantitiesFromCart = (product: Book) =>
    setCart((prevState) => prevState.filter((b) => b.id !== product.id));

  const removeFromCart = (product: Book) => {
    if (cart.find((p) => p.id === product.id)) {
      setCart((prevState) =>
        prevState
          .map((p) => (p.id === product.id ? { ...p, number: p.number - 1 } : p))
          .filter((p) => p.number !== 0),
      );
    } else {
      setCart((prevState) => prevState.filter((p) => p.id !== product.id));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllQuantitiesFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
