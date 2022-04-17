//% libs
import {useNavigate} from "react-router-dom";

//% Styles
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

interface CategoryItemProps {
  category: Category;
}

const DirectoryItem = function (props: CategoryItemProps) {
  const {title, imageUrl, route} = props.category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage about={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
