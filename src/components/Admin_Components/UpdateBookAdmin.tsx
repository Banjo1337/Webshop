import { useLocation } from "react-router-dom";
<<<<<<< HEAD:src/pages/AdminPages/UpdateBookAdmin.tsx
import { Book } from "../../components/Models";
import ProductFormUpdate from "../../components/productForm/ProductFormUpdate";
=======
import { CSSProperties} from "react";
import { Book } from "../Models";
import ProductFormUpdate from "../ProductFormUpdate";
>>>>>>> 38c8d2997f08c1695bea956431aea332c4557428:src/components/Admin_Components/UpdateBookAdmin.tsx
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
