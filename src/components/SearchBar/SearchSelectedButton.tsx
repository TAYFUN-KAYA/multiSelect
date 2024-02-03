import { SearchSelected } from "../../types/Search/SearchSelected";
import RemoveButton from "./RemoveButton";
import { ButtonName, ButtonRow } from "./SearchSelectedButtonStyle";

const SearchSelectedButton = ({
  item,
  searchControl,
  updateSearchControl,
}: SearchSelected) => {
  return (
    <ButtonRow>
      <ButtonName>{item?.name}</ButtonName>
      <RemoveButton
        searchControl={searchControl}
        updateSearchControl={updateSearchControl}
        item={item}
      />
    </ButtonRow>
  );
};

export default SearchSelectedButton;
