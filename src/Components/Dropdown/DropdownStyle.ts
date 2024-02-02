import styled from "styled-components";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  height: 66px;
`;

const Checked = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownTextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ItemText = styled.span`
  color: #475569;
  font-size: 15px;
`;

const DropdownImages = styled.img`
  width: 44px;
  height: 44px;
  aspect-ratio: 1;
  border-radius: 5px;
  margin-left: 10px;
`;

const HR = styled.div`
  height: 1px;
  width: 100%;
  background: #94a3b8;
`;

const DropdownBodyContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 4;
  left: 0;
  margin-top: 10px;
  width: 100%;
  height: 450px;
  border-radius: 14px;
  border: 1px solid #94a3b8;
  overflow-y: scroll;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const LoadingAnimation = styled.img`
  height: 150px;
  width: 150px;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ErrorImage = styled.img`
  height: 170px;
  width: 170px;
`;

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const NotFoundImage = styled.img`
  height: 170px;
  width: 170px;
  border-radius: 10px;
`;

export {
  DropdownContainer,
  DropdownRow,
  Checked,
  DropdownTextInfoContainer,
  ItemText,
  DropdownImages,
  HR,
  DropdownBodyContainer,
  LoadingContainer,
  LoadingAnimation,
  ErrorContainer,
  ErrorImage,
  NotFoundContainer,
  NotFoundImage,
};
