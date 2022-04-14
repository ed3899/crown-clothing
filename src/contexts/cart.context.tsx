import {createContext, useState} from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CartItem
): CartItem[] => {
  //find if cart items contains product to add
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  //if found increment quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity! + 1}
        : cartItem
    );
  }
  //return new array with modified cartItems / new cart item

  return [...cartItems, {...productToAdd, quantity: 1}];
};

interface CartContext {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: CartItem) => void;
}
export const CartContext = createContext<CartContext>({
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (productToAdd: CartItem) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  };

  const {children} = props;
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
