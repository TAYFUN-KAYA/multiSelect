import { DownIcon, UpIcon } from "../../assets/icons/Index";
import { SearchSelected } from "../../types/Search/SearchSelected";
import {
  SearchControllerContainer,
  SearchControllerHandleIcon,
} from "./SearchBarStyle";

const SearchController = ({
  searchControl,
  updateSearchControl,
}: SearchSelected) => {
  const handleController = () => {
    updateSearchControl({ isOpen: !searchControl.isOpen });
  };
  return (
    <SearchControllerContainer>
      <SearchControllerHandleIcon
        src={searchControl.isOpen ? DownIcon : UpIcon}
        onClick={() => handleController()}
      />
    </SearchControllerContainer>
  );
};

export default SearchController;
