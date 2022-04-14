import {createContext, useState} from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
const addCartItem = (cartItems: any[], productToAdd: any) => {
  //find if cart items contains product to add
  //if found increment quantity
  //return new array with modified cartItems / new cart item
};

export const CartContext = createContext<{
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
}>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = (props: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd: any) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
  };

  const {children} = props;
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
