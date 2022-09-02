import { createContext, useState, ReactNode, useContext } from "react";
import { Product, ProductInCart } from "../components/Models";

interface ContextValue {
  cart: ProductInCart[];
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
  const [cart, setCart] = useState<ProductInCart[]>([]);
  console.log(cart)

  const addToCart = (product: Product) => {
    if(cart.find(p => p.id === product.id)) {
      setCart(prevState => prevState.map(p => p.id === product.id ? {...p, number: p.number + 1 } : p))
    } else {
      setCart((prevState) => [...prevState, {...product, number: 1}]);
    }
  };
  const removeFromCart = (product: Product) => {
    if(cart.find(p => p.id === product.id)) {
      setCart(prevState => prevState.map(p => p.id === product.id ? {...p, number: p.number - 1 } : p).filter(p => p.number !== 0))
    } else {
      setCart((prevState) => prevState.filter((p) => p.id !== product.id));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
