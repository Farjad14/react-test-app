import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import React from "react";
import messages from "./messages";
import { FormComponent } from "./form-component";
import { ColumnComponent } from "./column-component";

const TableTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(white, #95a2b3, #818fa2);
  color: white;
  padding: 10px;
  margin: 10px 0 10px 0;
`;

const SecondaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Wrapper = styled.div`
  font-size: 14px;
`;


export const TableTitleWrapper = () => (
  <TableTitle>
    <FormattedMessage {...messages.formTitle} />
  </TableTitle>
);

export const TableComponent = () => {
  const [todos, setTodos] = React.useState({
    col1: [
      { uid: "uuidv4", text: "Farjad" },
      { uid: "uuidv224", text: "Anna" }
    ],
    col2: [{ uid: "uuidv4", text: "H8tch" }]
  });

  const addTodo = (text, col, uid) => {
    const newTodos = {
      ...todos,
      [col]: [...todos[col], { text, uid, col }]
    };
    setTodos(newTodos);
  };

  const removeTodo = (item, col) => {
    const values = todos[col];
    const index = values.findIndex(i => i.uid === item.uid);
    values.splice(index, 1);
    const itemIndex = {
      ...todos,
      [col]: values
    };
    setTodos(itemIndex);
  };
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <Wrapper>
      <TableTitleWrapper />
      <SecondaryWrapper>
        <FormComponent
          addTodo={addTodo}
          searchTerm={searchTerm}
          handleChange={handleSearchChange}
        />
        <ColumnComponent
          todos={todos}
          searchTerm={searchTerm}
          removeTodo={removeTodo}
        />
      </SecondaryWrapper>
    </Wrapper>
  );
};




