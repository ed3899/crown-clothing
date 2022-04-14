import {createContext, useState} from "react";

export const CartContext = createContext<{
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = (props: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = {
    isCartOpen,
    setIsCartOpen,
  };

  const {children} = props;
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
