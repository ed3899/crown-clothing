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
    cartItem: {name, quantity},
  } = props;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
