import styled from "styled-components";

const SearchInputs = styled.input`
  width: 100%;
  height: 23px;
  margin-left: 5px;
  background: transparent;
  border: none;
  outline: none;
  color: #000000;
  touch-action: manipulation;
  max-width: 100%;
  user-zoom: fixed;
`;

const SearchInputContainer = styled.div`
  flex: 1;
`;

export { SearchInputs, SearchInputContainer };
