import { createContext } from "react";
interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  immagini: { img: string }[];
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
export default CartContext;