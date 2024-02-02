import { DropdownBody } from "../../types/Dropdown/DropdownBody";
import {
  DropdownBodyContainer,
  ErrorContainer,
  ErrorImage,
  LoadingAnimation,
  LoadingContainer,
  NotFoundContainer,
  NotFoundImage,
} from "./DropdownStyle";
import DropdownBodyItem from "../DropdownBody/DropdownBodyItem";
import { Loading, NotFound } from "../../assets/animation";
import { ErrorImages } from "../../assets/images";
import KeyOperations from "../../hooks/KeyOperations";

const DropdownBody = ({
  data,
  isLoading,
  error,
  updateSearchControl,
  searchControl,
}: DropdownBody) => {
  console.log("data: ", data);
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
      ) : data.length > 0 ? (
        <DropdownBodyItem
          data={data}
          selectedIndex={exportKeyOperation.selectedIndex!}
          searchControl={searchControl}
          updateSearchControl={updateSearchControl}
        />
      ) : (
        <NotFoundContainer>
          <NotFoundImage src={NotFound} />
        </NotFoundContainer>
      )}
    </DropdownBodyContainer>
  );
};

export default DropdownBody;
