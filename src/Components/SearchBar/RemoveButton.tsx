import { SelectedValueTypes } from "../../types/SelectedValues";
import { SearchSelected } from "../../types/Search/SearchSelected";
import { CloseIcon } from "../../assets/icons/Index";
import { RemoveButtons } from "./SearchSelectedButtonStyle";

const RemoveButton = ({
  item,
  searchControl,
  updateSearchControl,
}: SearchSelected) => {
  const handleRemoveElement = () => {
    const allSelecetedValues: SelectedValueTypes[] =
      searchControl?.selectedValues;
    const findIndex = allSelecetedValues?.findIndex(
      (value) => value.id === item?.id
    );
    allSelecetedValues.splice(findIndex, 1);
    updateSearchControl({
      selectedValues: [...allSelecetedValues],
    });
  };
  return (
    <RemoveButtons onClick={() => handleRemoveElement()}>
      <img src={CloseIcon} style={{ width: 20 }} />
    </RemoveButtons>
  );
};

export default RemoveButton;
