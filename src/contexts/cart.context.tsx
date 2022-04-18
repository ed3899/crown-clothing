import {createContext, useState, useEffect, useReducer} from "react";

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

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

interface CartContextInterface {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: CartItem) => void;
  removeItemToCart: (cartItemToRemove: CartItem) => void;
  clearItemFromCart: (cartItemToClear: CartItem) => void;
  cartCount: number;
  cartTotal: number;
}
export const CartContext = createContext<CartContextInterface>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

interface INITIAL_STATE_INTERFACE {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
}

const INITIAL_STATE: INITIAL_STATE_INTERFACE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

type CartActions = {
  type: "SET_CART_ITEM";
  payload: Omit<INITIAL_STATE_INTERFACE, "isCartOpen">;
};
const cartReducer = (state: INITIAL_STATE_INTERFACE, action: CartActions) => {
  const {type, payload} = action;

  switch (type) {
    case "SET_CART_ITEM":
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandle type of ${type} in cartReducer`);
  }
};

interface CartProviderProps {
  children: React.ReactNode;
}
export const CartProvider = (props: CartProviderProps) => {
  const [{cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems: CartItem[]) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity!,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity! * cartItem.price,
      0
    );

    dispatch({
      type: "SET_CART_ITEM",
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = (productToAdd: CartItem) => {
    updateCartItemsReducer(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove: CartItem) => {
    updateCartItemsReducer(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: CartItem) => {
    updateCartItemsReducer(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen: () => {},
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  const {children} = props;
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
