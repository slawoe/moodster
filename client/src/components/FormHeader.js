import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FormHeaderDIV = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

function FormHeader({ children }) {
  return (
    <>
      <FormHeaderDIV>{children}</FormHeaderDIV>
    </>
  );
}
export default FormHeader;

FormHeader.propTypes = {
  children: PropTypes.element.isRequired,
};
