import { useQuery } from "@apollo/client";
import { useReducer } from "react";
import { SearchControllerTypes } from "../types/Search/SearchControllerTypes";
import { Container } from "./CustomDropdownPageStyle";
import { DATA_QUERY } from "../services/querys/DataQuery";
import ClickCheck from "../hooks/ClickCheck";
import SearchBars from "../components/SearchBar/Index";
import DropdownBody from "../components/dropdown/DropdownBody";

const InitialSearchController = {
  isOpen: false,
  selectedValues: [],
  filter: "",
};

const CustomDropdownPage = () => {
  const [searchControl, updateSearchControl] = useReducer(
    (state: SearchControllerTypes, payload: Partial<SearchControllerTypes>) => {
      if (payload.filter) {
        state.isOpen = true;
      }
      return { ...state, ...payload };
    },
    InitialSearchController
  );

  const { data, loading, error } = useQuery(DATA_QUERY, {
    variables: {
      filter: {
        name: searchControl?.filter,
      },
    },
  });

  const { hookExport } = ClickCheck({
    updateSearchControl: updateSearchControl,
  });

  return (
    <Container ref={hookExport.containerRef} id="generalContainer">
      <SearchBars
        updateSearchControl={updateSearchControl}
        searchControl={searchControl}
      />
      {searchControl.isOpen && (
        <DropdownBody
          data={data?.characters?.results || []}
          searchControl={searchControl}
          updateSearchControl={updateSearchControl}
          isLoading={loading}
          error={error}
        />
      )}
    </Container>
  );
};

export default CustomDropdownPage;
