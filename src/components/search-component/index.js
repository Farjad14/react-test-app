
import styled from "@emotion/styled";
import { FormattedMessage, injectIntl } from "react-intl";
import React from "react";
import messages from "../messages";

const StyledSearchComponent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 40px;
`;

const StyledSearchText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const SearchStyledInput = styled.input`
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

export const SearchComponent = injectIntl(
    ({ searchTerm, handleChange, intl }) => (
      <StyledSearchComponent>
        <StyledSearchText>
          <FormattedMessage {...messages.searchItemTitle} />
        </StyledSearchText>
        <SearchStyledInput
          type="text"
          placeholder={intl.formatMessage(messages.searchPlaceHolder)}
          value={searchTerm}
          onChange={handleChange}
        />
      </StyledSearchComponent>
    )
  );