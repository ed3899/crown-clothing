//% Libs
import {createContext, useState} from "react";

//% Data
import SHOP_DATA from "../shop-data";

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

  const value = {products};
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
