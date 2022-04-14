//% Libs
import {useContext} from "react";

//% SVG
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

//Context
import {CartContext} from "../../contexts/cart.context";

//% Styles
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
