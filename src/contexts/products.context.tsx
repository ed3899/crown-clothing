//% Libs
import {createContext, useState, useEffect} from "react";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
interface PRODUCT {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export const ProductsContext = createContext<{products: PRODUCT[]}>({
  products: [],
});

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = (props: ProductsProviderProps) => {
  const {children} = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = {products};
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
