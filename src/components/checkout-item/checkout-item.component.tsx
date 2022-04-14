//% Styles
import {CartItem} from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem = (props: CheckoutItemProps) => {
  const {
    cartItem: {name, imageUrl, price, quantity},
  } = props;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
