import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: coloumn;
  width: 100%;
  border: 5px solid white;
  font-size: 16px;
  flex-shrink: 1;
`;

export const ColumnTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(white, #758296, #4c586c);
  color: white;
  padding: 10px;
`;

export const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  :first-child {
    border-right: 5px solid white;
  }
`;

export const StyledList = styled.span`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: #eeeeef;
  :nth-child(2n-1) {
    background: #bbc0c7;
  }
`;