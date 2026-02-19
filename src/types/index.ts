export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description?: string;
  image?: string;
  rating?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
