//% Styles
import "./directory-item.styles.scss";

interface CategoryItemProps {
  category: {
    title: string;
    imageUrl: string;
  };
}

const DirectoryItem = function (props: CategoryItemProps) {
  const {title, imageUrl} = props.category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
