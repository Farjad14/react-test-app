import styled from "@emotion/styled";
import { FormattedMessage } from "react-intl";
import React from "react";
import messages from "../messages";

const StyledMainTitle = styled.span`
  display: flex;
  color: white;
  font-size: 50px;
  font-style: italic;
  font-family: Merriweather, serif;
  @media (max-width: 800px) {
    font-size: 36px;
  }
`;

const StyledDescription = styled.span`
  display: flex;
  color: #8adfd6;
  font-size: 20px;
  margin: 10px 0 60px 0;
  width: 55%;
  @media (max-width: 800px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const MainTitle = () => (
  <StyledMainTitle>
    <FormattedMessage {...messages.mainTitle} />
  </StyledMainTitle>
);

export const Description = () => (
  <StyledDescription>
    <FormattedMessage {...messages.description} />
  </StyledDescription>
);
