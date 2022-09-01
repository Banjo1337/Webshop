export interface Product {
  id: string;
  price: number;
  title: string;
  description: string;
  author: string;
  image: string;
  category: string;
}

export type ProductCreate = Omit<Product, "id">;

//Kategorier:
//Roman
//Deckare
//Kokbok
//Barnbok
//Träning
//Fakta
