import { Children } from "react";
import { DropdownBody } from "../../types/Dropdown/DropdownBody";
import { SelectedValueTypes } from "../../types/SelectedValues";
import DropdownItem from "../dropdown/DropdownItem";

const DropdownBodyItem = ({
  selectedIndex,
  data,
  updateSearchControl,
  searchControl,
}: DropdownBody) => {
  return (
    <>
      {Children.toArray(
        data?.length > 0 &&
          data?.map((item: SelectedValueTypes, index: number) => {
            return (
              <DropdownItem
                selectedIndex={selectedIndex!}
                index={index}
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

export default DropdownBodyItem;
