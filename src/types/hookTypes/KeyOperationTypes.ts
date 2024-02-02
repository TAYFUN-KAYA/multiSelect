import { SearchControllerTypes } from "../Search/SearchControllerTypes";
import { SelectedValueTypes } from "../SelectedValues";

export interface KeyOperationTypes {
  data: SelectedValueTypes[];
  searchControl: SearchControllerTypes;
  updateSearchControl: (payload: Partial<SearchControllerTypes>) => void;
}
