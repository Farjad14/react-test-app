import styled from "@emotion/styled";

export const TableTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(white, #95a2b3, #818fa2);
  color: white;
  padding: 10px;
  margin: 10px 0 10px 0;
`;

export const SecondaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  font-size: 14px;
`;
