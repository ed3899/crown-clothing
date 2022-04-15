//% Styles
import "./directory.styles.scss";

//% Components
import DirectoryItem from "../directory-item/directory-item.component";

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
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
