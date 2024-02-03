import { SearchBarTypes } from "../../types/Search/SearchBarTypes";
import SearchInput from "./SearchInput";
import SearchController from "./SearchController";
import { SearchBarBody, SearchBarContainer } from "./SearchBarStyle";
import SearchBarButtonGroup from "../SearchBarButtonGroup/SearchBarButtonGroup";
import SearchBarKeyOperation from "../../hooks/SearchBarKeyOperation";

const SearchBars = ({ searchControl, updateSearchControl }: SearchBarTypes) => {
  SearchBarKeyOperation({
    searchControl: searchControl,
    updateSearchControl: updateSearchControl,
  });
  return (
    <SearchBarContainer>
      <SearchBarBody>
        <SearchBarButtonGroup
          updateSearchControl={updateSearchControl}
          searchControl={searchControl}
        />
        <SearchInput
          searchControl={searchControl}
          updateSearchControl={updateSearchControl}
        />
      </SearchBarBody>
      <SearchController
        searchControl={searchControl}
        updateSearchControl={updateSearchControl}
      />
    </SearchBarContainer>
  );
};

export default SearchBars;
