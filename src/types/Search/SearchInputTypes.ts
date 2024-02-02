import { SearchControllerTypes } from "./SearchControllerTypes";

export interface SearchInputTypes {
  searchControl: SearchControllerTypes;
  updateSearchControl: (payload: Partial<SearchControllerTypes>) => void;
}
