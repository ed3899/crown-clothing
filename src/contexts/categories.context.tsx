//% Libs
import {createContext, useState, useEffect} from "react";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext<CategoriesContextInterface>({
  categoriesMap: {},
});

interface ProductsProviderProps {
  children: React.ReactNode;
}
export const CategoriesProvider = (props: ProductsProviderProps) => {
  const {children} = props;
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMapInt>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = {categoriesMap};
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
