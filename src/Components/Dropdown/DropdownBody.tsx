import { DropdownBody } from "../../types/Dropdown/DropdownBody";
import {
  DropdownBodyContainer,
  ErrorContainer,
  ErrorImage,
  LoadingAnimation,
  LoadingContainer,
} from "./DropdownStyle";
import DropdownBodyItem from "../DropdownBody/DropdownBodyItem";
import { Loading } from "../../assets/animation";
import { ErrorImages } from "../../assets/images";
import KeyOperations from "../../hooks/KeyOperations";

const DropdownBody = ({
  data,
  isLoading,
  error,
  updateSearchControl,
  searchControl,
}: DropdownBody) => {
  const { exportKeyOperation } = KeyOperations({
    data: data,
    searchControl: searchControl,
    updateSearchControl: updateSearchControl,
  });
  return (
    <DropdownBodyContainer id="dropdownContainer">
      {isLoading ? (
        <LoadingContainer>
          <LoadingAnimation src={Loading} />
        </LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <ErrorImage src={ErrorImages} />
        </ErrorContainer>
      ) : (
        <DropdownBodyItem
          data={data}
          selectedIndex={exportKeyOperation.selectedIndex!}
          searchControl={searchControl}
          updateSearchControl={updateSearchControl}
        />
      )}
    </DropdownBodyContainer>
  );
};

export default DropdownBody;
