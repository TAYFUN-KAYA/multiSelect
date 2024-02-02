import { ApolloError } from "@apollo/client";
import { SearchSelected } from "../Search/SearchSelected";
import { SelectedValueTypes } from "../SelectedValues";

export interface DropdownBody extends SearchSelected {
  data: SelectedValueTypes[];
  selectedIndex?: number;
  isLoading?: boolean;
  error?: ApolloError;
}
