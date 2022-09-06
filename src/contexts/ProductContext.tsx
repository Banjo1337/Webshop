import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { Book } from "../components/Models";
import { mockedProducts } from "../data";

interface ContextValue {
  products: Book[];
  addProduct: (product: Book) => void;
  removeProduct: (product: Book) => void;
  editProduct: (product: Book) => void;
  getProduct: (id: string) => Book;
}

const ProductContext = createContext<ContextValue>({} as ContextValue);

interface Props {
  children: ReactNode;
}

export default function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<Book[]>(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    JSON.parse(localStorage.getItem("products")!) || mockedProducts,
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function addProduct(product: Book) {
    setProducts((prevState) => [...prevState, product]);
  }

  function removeProduct(product: Book) {
    setProducts((prevState) => prevState.filter((p) => p.id !== product.id));
  }

  function editProduct(product: Book) {
    setProducts((prevState) => prevState.map((p) => (p.id !== product.id ? p : product)));
  }

  function getProduct(id: string): Book {
    return products.find((product) => product.id === id) || ({} as Book);
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, editProduct, getProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
