import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const MainContainer = styled.main`
  margin: 0;
  grid-area: 2 / 1 / 3 / 4;
  display: grid;
  grid-template-rows: 8.45% auto;
  grid-template-columns: 5vw 90vw 5vw;
  & > :first-child {
    grid-area: 1 / 1 / 2 / 4;
  }
  & > :last-child {
    grid-area: 2 / 2 / 3 / 3;
    overflow: auto;
  }
`;

function Main({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default Main;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
