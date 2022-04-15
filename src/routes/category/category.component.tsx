//% libs
import {useParams} from "react-router-dom";
import {useContext, useState, useEffect, Fragment} from "react";
import {v4} from "uuid";

//% components
import ProductCard from "../../components/product-card/product-card.component";
// context
import {CategoriesContext} from "../../contexts/categories.context";

//% Styles
import "./category.styles.scss";

const Category = () => {
  const {category} = useParams<string>();
  const {categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category!]);

  useEffect(() => {
    //Different, may need to modify it later

    setProducts(prevState => {
      if (prevState && categoriesMap[category!]) {
        return [...prevState, ...categoriesMap[category!]];
      } else {
        return [];
      }
    });
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category!.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map(product => <ProductCard key={v4()} product={product} />)}
      </div>
    </Fragment>
  );
};

export default Category;
