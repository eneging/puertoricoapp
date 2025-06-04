export type ProductCategory = "comida" | "bebida" | "evento";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  available: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
