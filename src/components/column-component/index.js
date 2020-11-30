import { FormattedMessage } from "react-intl";
import React from "react";
import messages from "../messages";
import { TableWrapper, ColumnSection, ColumnTitle, StyledList} from "./styles";

export const ColumnComponent = ({ items, removeItem, searchTerm }) => {
    const searchList = Object.keys(items).reduce((acc, currCol) => {
      const filtered = items[currCol].filter(item =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...acc,
        [currCol]: filtered
      };
    }, {});
    const results = searchTerm !== "" ? searchList : items;
    const columnHeader = i =>
      i === 0 ? messages.columnOneText : messages.columnTwoText;
    const keys = Object.keys(results);
    return (
      <TableWrapper>
        {keys.map((column, index) => (
          <ColumnSection key={index}>
            <ColumnTitle>
              <FormattedMessage {...columnHeader(index)} />
            </ColumnTitle>
            {results[column].map((item, i) => (
              <StyledList key={i}>
                {item.text}
                <button
                  data-automation={item.uid}
                  onClick={() => removeItem(item, column)}
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