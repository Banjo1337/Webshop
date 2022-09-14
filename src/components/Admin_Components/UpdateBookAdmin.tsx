import { CSSProperties } from "react";
import { useLocation } from "react-router-dom";
import { Book } from "../../components/Models";
import ProductFormUpdate from "../../components/productForm/ProductFormUpdate";
import { useProduct } from "../../contexts/ProductContext";

interface CustomizedState {
  id: string;
}

const divStyle: CSSProperties = {
  maxWidth: "1500px",
  margin: "0 auto",
  marginTop: "55px",
};

export default function UpdateBookAdmin() {
  window.scrollTo(0, 0);
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { products } = useProduct();
  const bookToUpdate = products.find((product) => product.id === state.id) || ({} as Book);
  return (
    <div style={divStyle}>
      <ProductFormUpdate key={state.id} formName='updatebook1' book={bookToUpdate} />
    </div>
  );
}
