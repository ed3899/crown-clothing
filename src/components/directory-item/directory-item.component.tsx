//% Styles
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

interface CategoryItemProps {
  category: {
    title: string;
    imageUrl: string;
  };
}

const DirectoryItem = function (props: CategoryItemProps) {
  const {title, imageUrl} = props.category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage about={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
