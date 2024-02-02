import { SelectedValueTypes } from "../../types/SelectedValues";
import { DropdownImages } from "./DropdownStyle";

const DropdownImage = ({ item }: { item: SelectedValueTypes }) => {
  return <DropdownImages src={item?.image} />;
};

export default DropdownImage;
