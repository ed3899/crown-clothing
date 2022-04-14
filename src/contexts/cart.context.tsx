import {createContext, useState, useEffect} from "react";

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

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  //find the cart item to remove
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  //check if quantity is equal to 1, if it is remove it from the cart
  if (existingCartItem!.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity! - 1}
      : cartItem
  );
};

interface CartContext {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: CartItem) => void;
  removeItemToCart: (cartItemToRemove: CartItem) => void;
  cartCount: number;
}
export const CartContext = createContext<CartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
});

interface CartProviderProps {
  children: React.ReactNode;
}
export const CartProvider = (props: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity!,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd: CartItem) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove: CartItem) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    cartCount,
  };

  const {children} = props;
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
