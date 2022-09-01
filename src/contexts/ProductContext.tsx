import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { Product } from "../components/Models"

interface ContextValue {
	products: Product[];
	addProduct: (product: Product) => void;
	removeProduct: (product: Product) => void;
    editProduct:  (product: Product) => void;
}

const ProductContext = createContext<ContextValue>(({
	products:[],
	addProduct: () => {},
	removeProduct: () => {},
    editProduct:  () => {},
}));

interface Props {
	children: ReactNode;
}

function ProductProvider({children}: Props) {
    const [products, setProducts] = useState<Product[]>(JSON.parse(localStorage.getItem("products")!) || []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products])

	function addProduct(product: Product) {
        setProducts(prevState => [...prevState, product]);
	}

	function removeProduct(product: Product) {
        setProducts(prevState => prevState.filter(p => p.id !== product.id));
	}

	function editProduct(product: Product) {
        setProducts(prevState => prevState.map(p => p.id !== product.id ? p : product));
	}

    return <ProductContext.Provider value={{products, addProduct, removeProduct, editProduct}}>{children}</ProductContext.Provider>;


}

export default function useProduct() {
    return useContext(ProductContext);
};



