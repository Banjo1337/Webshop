import { useLocation } from "react-router-dom";
import { Book } from "../../components/Models";
import ProductFormUpdate from "../../components/ProductFormUpdate";
import { useProduct } from "../../contexts/ProductContext";

interface CustomizedState {
  id: string;
}

export default function UpdateBookAdmin() {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { products } = useProduct();
  const bookToUpdate = products.find((product) => product.id === state.id) || ({} as Book);
  return (
    <main>
      <ProductFormUpdate key={state.id} formName='updatebook1' book={bookToUpdate} />
    </main>
  );
}
