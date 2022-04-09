//% Styles
import "./directory.styles.scss";

//% Components
import CategoryItem from "../category-item/category-item.component";

interface DirectoryProps {
  categories: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
}

const Directory = function (props: DirectoryProps) {
  const {categories} = props;
  return (
    <div className="directory-container">
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
