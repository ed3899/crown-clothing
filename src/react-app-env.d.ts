/// <reference types="react-scripts" />

declare module "react-dom/client" {
  // typing module default export as `any` will allow you to access its members without compiler warning
  var createRoot: any;
  export {createRoot};
}

// declare namespace JSX {
//   interface IntrinsicElements {
//     input: React.DetailedHTMLProps<
//       React.InputHTMLAttributes<React.HTMLInputTypeAttribute>
//     >;
//   }
// }
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
interface CategoriesMapInt {
  [i: string]: Product[];
}
interface CategoriesContextInterface {
  categoriesMap: CategoriesMapInt;
}
