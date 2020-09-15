import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const NavigationWrapper = styled.div`
  grid-area: 3 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
`;

function FormNavigationWrapper({ children }) {
  return (
    <>
      <NavigationWrapper>{children}</NavigationWrapper>
    </>
  );
}
export default FormNavigationWrapper;

FormNavigationWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
