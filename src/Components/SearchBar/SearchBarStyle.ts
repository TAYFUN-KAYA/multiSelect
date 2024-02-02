import styled from "styled-components";

const SearchBarContainer = styled.div`
  width: 100%;
  border-radius: 14px;
  display: flex;
  border: 1px solid #94a3b8;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background: white;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const SearchBarBody = styled.div`
  width: 100%;
  height: 80%;
  max-height: 145px;
  min-height: 35px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

const SearchControllerContainer = styled.div`
  width: 23px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchControllerHandleIcon = styled.img`
  width: 18px;
  height: 20px;
`;

export {
  SearchBarContainer,
  SearchBarBody,
  SearchControllerContainer,
  SearchControllerHandleIcon,
};
