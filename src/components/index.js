import { FormattedMessage } from "react-intl";
import React, { useState } from "react";
import messages from "./messages";
import { FormComponent } from "./form-component";
import { ColumnComponent } from "./column-component";
import { useLocalStorage } from "./utils";
import { TableTitle, Wrapper, SecondaryWrapper } from "./styles";

export const TableTitleWrapper = () => (
  <TableTitle>
    <FormattedMessage {...messages.formTitle} />
  </TableTitle>
);

export const TableComponent = () => {
  const dummyContent = {
    col1: [
      { uid: "uuidv4", text: "Farjad" },
      { uid: "uuidv224", text: "Anna" },
    ],
    col2: [{ uid: "uuidv4", text: "H8tch" }],
  };

  const [items, setItems] = useLocalStorage("item", dummyContent);

  const addItem = (text, col, uid) => {
    const newItems = {
      ...items,
      [col]: [...items[col], { text, uid, col }],
    };
    setItems(newItems);
  };

  const removeItem = (item, col) => {
    const values = items[col];
    const index = values.findIndex((i) => i.uid === item.uid);
    values.splice(index, 1);
    const itemIndex = {
      ...items,
      [col]: values,
    };
    setItems(itemIndex);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Wrapper>
      <TableTitleWrapper />
      <SecondaryWrapper>
        <FormComponent
          addItem={addItem}
          searchTerm={searchTerm}
          handleChange={handleSearchChange}
        />
        <ColumnComponent
          items={items}
          searchTerm={searchTerm}
          removeItem={removeItem}
        />
      </SecondaryWrapper>
    </Wrapper>
  );
};
