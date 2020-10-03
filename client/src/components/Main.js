import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MainContainer = styled.main`
  margin: 0;
  grid-area: 2 / 1 / 3 / 4;
  display: grid;
  grid-template-rows: 8.45% auto;
  grid-template-columns: 5vw 90vw 5vw;
  & > :first-of-type {
    grid-area: 1 / 1 / 2 / 4;
  }
  & > :last-of-type {
    grid-area: 2 / 2 / 3 / 3;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.element,
};
