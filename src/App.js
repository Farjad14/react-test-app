import styled from "@emotion/styled";
import React from "react";
import { MainTitle, Description } from "./components/top-section";
import { TableComponent } from "./components/";


const MainWrapper = styled.div`
padding: 10%;
`;

const App = () => {
  return (
    <MainWrapper>
        <MainTitle />
        <Description />
        <TableComponent />
    </MainWrapper>
  );
};

export default App;