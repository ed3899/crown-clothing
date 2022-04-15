//% Libs
import {useContext, Fragment} from "react";

//% Components
import ProductCard from "../../components/product-card/product-card.component";
// Context
import {CategoriesContext} from "../../contexts/categories.context";

//% Styles
import "./shop.styles.scss";

const Shop = () => {
  const {categoriesMap} = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
