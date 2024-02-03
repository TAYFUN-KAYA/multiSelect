import { SearchInputTypes } from "../../types/Search/SearchInputTypes";
import { SearchInputContainer, SearchInputs } from "./SearchInputStyle";

const SearchInput = ({
  searchControl,
  updateSearchControl,
}: SearchInputTypes) => {
  return (
    <SearchInputContainer>
      <SearchInputs
        value={searchControl.filter}
        onChange={(e) => updateSearchControl({ filter: e.target.value })}
        placeholder={
          searchControl.filter === "" &&
          searchControl.selectedValues.length === 0
            ? "Search Characters"
            : ""
        }
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
