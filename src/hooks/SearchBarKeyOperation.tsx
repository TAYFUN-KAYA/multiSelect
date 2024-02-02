import { useCallback, useEffect } from "react";
import { SearchSelected } from "../types/Search/SearchSelected";

const SearchBarKeyOperation = ({
  updateSearchControl,
  searchControl,
}: SearchSelected) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        const allSelected = searchControl.selectedValues;
        const selectedLength = allSelected.length;
        if (selectedLength > 0) {
          allSelected.splice(selectedLength - 1, 1);
        }
        updateSearchControl({ selectedValues: [...allSelected] });
      }
    },
    [searchControl, updateSearchControl]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default SearchBarKeyOperation;
