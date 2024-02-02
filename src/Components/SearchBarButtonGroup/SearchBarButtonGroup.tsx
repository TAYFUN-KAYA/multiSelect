import { Children } from "react";
import SearchSelectedButton from "../SearchBar/SearchSelectedButton";
import { SelectedValueTypes } from "../../types/SelectedValues";
import { SearchSelected } from "../../types/Search/SearchSelected";

const SearchBarButtonGroup = ({
  searchControl,
  updateSearchControl,
}: SearchSelected) => {
  return (
    <>
      {Children.toArray(
        searchControl?.selectedValues?.map((item: SelectedValueTypes) => {
          return (
            <SearchSelectedButton
              item={item}
              updateSearchControl={updateSearchControl}
              searchControl={searchControl}
            />
          );
        })
      )}
    </>
  );
};

export default SearchBarButtonGroup;
