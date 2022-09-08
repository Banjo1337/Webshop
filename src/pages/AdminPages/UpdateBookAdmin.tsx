import ProductFormUpdate from "../../components/ProductFormUpdate";
import { useProduct } from "../../contexts/ProductContext";
import { Book } from "../../components/Models";
import { useLocation } from "react-router-dom";

export default function UpdateBookAdmin() {
  const location = useLocation();
  const { id } = location.state;
  const {products} = useProduct();
  return (
    <main>
      <ProductFormUpdate formName='updatebook' book={products.find((product) => product.id === id) || ({} as Book)} />
    </main>
  );
}
