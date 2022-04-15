//% Libs
import {Routes, Route} from "react-router-dom";

//% Component
import CategoriesPreview from "../categories-preview/categories-preview.component";

//% Styles
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
