//% Libs
import {useContext} from "react";

//% Components
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
// Context
import {CartContext} from "../../contexts/cart.context";

//% Styles
import "./product-card.styles.scss";
interface ProductCardProps {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  };
}
const ProductCard = (props: ProductCardProps) => {
  const {
    product: {name, price, imageUrl},
    product,
  } = props;

  const {addItemToCart} = useContext(CartContext);

  //Fix types? Remove quantity?
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
