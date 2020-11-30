import { FormattedMessage, injectIntl } from "react-intl";
import React from "react";
import messages from "../messages";
import {
  StyledSearchComponent,
  StyledSearchText,
  SearchStyledInput,
} from "./styles";

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
