//% Styles
import "./cart-item.styles.scss";

interface CartItemProps {
  cartItem: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity?: number;
  };
}

const CartItem = (props: CartItemProps) => {
  const {
    cartItem: {name, price, quantity, imageUrl},
  } = props;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="quantity">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
