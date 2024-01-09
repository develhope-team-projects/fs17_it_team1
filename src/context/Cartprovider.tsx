import { ReactNode, useState } from "react";
import CartContext from "./Cartcontext";
interface CartItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  immagini: { img: string }[];
}
interface CartProviderProps {
  children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
