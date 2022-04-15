//% Libs
import {useContext} from "react";

//% Components
import CategoryPreview from "../../components/category-preview/category-preview.component";
// Context
import {CategoriesContext} from "../../contexts/categories.context";

//% Styles
import "./shop.styles.scss";

const Shop = () => {
  const {categoriesMap} = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
