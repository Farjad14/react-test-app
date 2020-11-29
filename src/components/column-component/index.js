import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import React from "react";
import messages from "../messages";

const TableWrapper = styled.div`
  display: flex;
  flex-direction: coloumn;
  width: 100%;
  border: 5px solid white;
  font-size: 16px;
  flex-shrink: 1;
`;

const ColumnTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(white, #758296, #4c586c);
  color: white;
  padding: 10px;
`;

const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  :first-child {
    border-right: 5px solid white;
  }
`;

const StyledList = styled.span`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: #eeeeef;
  :nth-child(2n-1) {
    background: #bbc0c7;
  }
`;

export const ColumnComponent = ({ todos, removeTodo, searchTerm }) => {
    const list = Object.keys(todos).reduce((acc, currCol) => {
      const filtered = todos[currCol].filter(item =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...acc,
        [currCol]: filtered
      };
    }, {});
    const items = searchTerm !== "" ? list : todos;
    const columnHeader = i =>
      i === 0 ? messages.columnOneText : messages.columnTwoText;
    const keys = Object.keys(items);
    return (
      <TableWrapper>
        {keys.map((column, index) => (
          <ColumnSection key={index}>
            <ColumnTitle>
              <FormattedMessage {...columnHeader(index)} />
            </ColumnTitle>
            {items[column].map((todo, i) => (
              <StyledList key={i}>
                {todo.text}
                <button
                  data-automation={todo.uid}
                  onClick={() => removeTodo(todo, column)}
                >
                  x
                </button>
              </StyledList>
            ))}
          </ColumnSection>
        ))}
      </TableWrapper>
    );
  };