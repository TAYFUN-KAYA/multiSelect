import { useCallback, useEffect, useRef } from "react";
import { SearchControllerTypes } from "../types/Search/SearchControllerTypes";

const ClickCheck = ({
  updateSearchControl,
}: {
  updateSearchControl: (payload: Partial<SearchControllerTypes>) => void;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current?.contains(event.target as Node)
      ) {
        updateSearchControl({ isOpen: false });
      }
    },
    [updateSearchControl]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  const hookExport = {
    containerRef,
  };
  return {
    hookExport,
  };
};

export default ClickCheck;
