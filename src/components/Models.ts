export interface Book {
  id: string;
  price: number;
  title: string;
  description: string;
  author: string;
  image: string;
  category: string;
}

export type ProductCreate = Omit<Book, "id">;

export interface ProductInCart extends Book {
  number: number;
}

export type UserCreate = Omit<User, "id">;

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  city: string;
}

export interface CreateProductFormValues {
  createProduct: ProductCreate;
}

export const initialCreateProductFormValues: ProductCreate = {
  price: 0,
  title: "",
  description: "",
  author: "",
  image: "",
  category: "",
};
