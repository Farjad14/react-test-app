import { FormattedMessage, injectIntl } from "react-intl";
import React, { useState } from "react";
import { SearchComponent } from "../search-component";
import messages from "../messages";
import { v4 as uid } from "uuid";
import {
  FormSection,
  ChooseColumnInput,
  EnterItemInput,
  AddItemBtn,
} from "./styles";

export const FormComponent = injectIntl(
  ({ addItem, intl, searchTerm, handleChange }) => {
    const [value, setValue] = useState("");
    const [column, setColumn] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      if (!column) return;
      const uuid = uid();
      addItem(value, column, uuid);
      setValue("");
      setColumn("");
    };

    const handleSelectChange = (e) => {
      setColumn(e.target.value);
    };

    return (
      <FormSection onSubmit={handleSubmit}>
        <EnterItemInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={intl.formatMessage(messages.enterItemInput)}
        />
        <ChooseColumnInput onChange={handleSelectChange} value={column}>
          <FormattedMessage {...messages.chooseColumnButton}>
            {(msgs) => <option value="">{msgs}</option>}
          </FormattedMessage>
          <FormattedMessage {...messages.columnOneText}>
            {(msgs) => <option value="col1">{msgs}</option>}
          </FormattedMessage>
          <FormattedMessage {...messages.columnTwoText}>
            {(msgs) => <option value="col2">{msgs}</option>}
          </FormattedMessage>
        </ChooseColumnInput>
        <AddItemBtn
          type="submit"
          value={intl.formatMessage(messages.addItemBtn)}
        />
        <SearchComponent searchTerm={searchTerm} handleChange={handleChange} />
      </FormSection>
    );
  }
);
