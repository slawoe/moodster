import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FormWrappingDIV = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-rows: 25% 65% 10%;
`;

function FormPageWrapper({ children }) {
  return (
    <>
      <FormWrappingDIV>{children}</FormWrappingDIV>
    </>
  );
}
export default FormPageWrapper;

FormPageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
