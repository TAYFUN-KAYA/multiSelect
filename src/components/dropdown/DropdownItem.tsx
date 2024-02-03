import { SelectedValueTypes } from "../../types/SelectedValues";
import { DropdownItemTypes } from "../../types/Dropdown/DropdownItem";
import { DropdownContainer, DropdownRow, HR } from "./DropdownStyle";
import Check from "./Check";
import DropdownTextInfo from "./DropdownTextInfo";
import DropdownImage from "./DropdownImage";

const DropdownItem = ({
  index,
  selectedIndex,
  item,
  searchControl,
  updateSearchControl,
}: DropdownItemTypes) => {
  const findIndex = searchControl?.selectedValues?.findIndex(
    (value) => value.id === item?.id
  );

  const checkedControl = findIndex === -1 ? false : true;

  const handleAddItem = () => {
    if (item) {
      updateSearchControl({
        selectedValues: [...searchControl.selectedValues, item],
      });
    }
  };
  

  const handleRemoveItem = () => {
    const allSelecetedValues: SelectedValueTypes[] =
      searchControl?.selectedValues;

    allSelecetedValues.splice(findIndex, 1);
    updateSearchControl({
      selectedValues: [...allSelecetedValues],
    });
  };

  return (
    <DropdownContainer
      onClick={() => {
        if (checkedControl) {
          handleRemoveItem();
        } else {
          handleAddItem();
        }
      }}
    >
      <DropdownRow
        style={{
          border: index === selectedIndex ? "2px solid #F09737" : "none",
          borderRadius: 5,
        }}
      >
        <Check checkedControl={checkedControl} />
        <DropdownImage item={item!} />
        <DropdownTextInfo item={item!} searchControl={searchControl} />
      </DropdownRow>
      <HR />
    </DropdownContainer>
  );
};

export default DropdownItem;
