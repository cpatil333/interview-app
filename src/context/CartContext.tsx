import React, {
  createContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import type { Cart } from "../types/Cart";

type CartContextType = {
  cartItems: Cart[];
  setCartItems: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (cart: Cart) => void;
  removeToCart: (id: number) => void;
  clearCart: () => void;
  getSingleProduct: (id: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Cart[]>(() => {
    const savedCart = localStorage.getItem("cart_items");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //  Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(cartItems));
  }, [cartItems]);

  const getSingleProduct = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id === id));
  };

  const addToCart = (cart: Cart) => {
    setCartItems((prev) => [...prev, cart]);
  };

  const removeToCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  console.log(cartItems);
  return (
    <CartContext.Provider
      value={{
        getSingleProduct,
        cartItems,
        setCartItems,
        addToCart,
        removeToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
