import { SearchControllerTypes } from "./SearchControllerTypes";
import { SelectedValueTypes } from "../SelectedValues";

export interface SearchSelected {
  item?: SelectedValueTypes;
  searchControl: SearchControllerTypes;
  updateSearchControl: (payload: Partial<SearchControllerTypes>) => void;
}
