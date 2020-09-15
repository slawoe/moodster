import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FormWrappingDIV = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

function FormWrapper({ children }) {
  return (
    <>
      <FormWrappingDIV>{children}</FormWrappingDIV>
    </>
  );
}
export default FormWrapper;

FormWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
