import React from "react";
import PropTypes from "prop-types";
import StyledTextContainer from "../components/StyledTextContainer";

function Welcome({ children }) {
  return (
    <StyledTextContainer>
      <p>Hallo Welt!</p>
    </StyledTextContainer>
  );
}

export default Welcome;

Welcome.propTypes = {
  children: PropTypes.element.isRequired,
};
