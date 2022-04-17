//% Libs
import {useContext} from "react";

//Context
import {CartContext} from "../../contexts/cart.context";

//% Styles
import {ShoppingIcon, CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
