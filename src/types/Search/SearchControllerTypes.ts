import { SelectedValueTypes } from "../SelectedValues";

export interface SearchControllerTypes {
  isOpen: boolean;
  selectedValues: SelectedValueTypes[];
  filter: string;
}
