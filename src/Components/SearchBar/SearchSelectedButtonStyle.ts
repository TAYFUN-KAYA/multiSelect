import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #e2e8f0;
  border-radius: 10px;
  height: 33px;
  margin-left: 5px;
`;

const RemoveButtons = styled.div`
  height: 23px;
  width: 23px;
  margin-right: 10px;
  margin-left: 5px;
  border-radius: 5px;
  background: #94a3b8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonName = styled.span`
  margin-left: 10px;
  color: #334155;
  font-size: 15px;
  font-weight: 500;
`;

export { ButtonRow, RemoveButtons, ButtonName };
