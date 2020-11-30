import styled from "@emotion/styled";
import React from "react";
import { MainTitle, Description } from "./components/top-section";
import { TableComponent } from "./components/";
import { IntlProvider } from "react-intl";

const MainWrapper = styled.div`
  padding: 10%;
`;

const App = () => {
  return (
    <IntlProvider locale="en">
      <MainWrapper>
        <MainTitle />
        <Description />
        <TableComponent />
      </MainWrapper>
    </IntlProvider>
  );
};

export default App;
