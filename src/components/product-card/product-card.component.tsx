import "./product-card.styles.scss";

//% Components
import Button from "../button/button.component";

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
  } = props;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
