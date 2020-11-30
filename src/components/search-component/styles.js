
import styled from "@emotion/styled";

export const StyledSearchComponent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 40px;
`;

export const StyledSearchText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const SearchStyledInput = styled.input`
  background: #9ba1ab;
  color: white;
  padding: 10px;
  margin-top: 5px;
  border: white 2px solid;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 0.7; /* Firefox */
  }
  @media (max-width: 800px) {
    margin: 10px 0 30px 0;
  }
`;