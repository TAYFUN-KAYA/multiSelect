import { useCallback, useEffect, useState } from "react";
import { KeyOperationTypes } from "../types/hookTypes/KeyOperationTypes";

const KeyOperations = ({
  data,
  updateSearchControl,
  searchControl,
}: KeyOperationTypes) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setSelectedIndex((prevIndex) =>
          prevIndex !== null ? Math.max(prevIndex - 1, 0) : 0
        );
      } else if (e.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex !== null ? Math.min(prevIndex + 1, data.length - 1) : 0
        );
      } else if (e.key === "Enter" || e.key === "Tab") {
        updateSearchControl({
          selectedValues: [
            ...searchControl.selectedValues,
            data[selectedIndex!],
          ],
        });
      } else if (e.key === "Backspace") {
        if (selectedIndex !== null) {
          const updatedData = [...data];
          updatedData.splice(selectedIndex, 1);
          setSelectedIndex((prevIndex: number | null) =>
            prevIndex !== null ? Math.min(prevIndex, data.length - 2) : null
          );
          updateSearchControl({
            selectedValues: [
              ...searchControl.selectedValues.filter(
                (value) => value !== data[selectedIndex]
              ),
            ],
          });
        }
      }
    },
    [data, selectedIndex, searchControl, updateSearchControl]
  );

  const exportKeyOperation = {
    selectedIndex,
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return { exportKeyOperation };
};

export default KeyOperations;
