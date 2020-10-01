import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FormPageWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-rows: 30% 60% 10%;
  & > div:first-of-type {
    grid-area: 1 / 1 / 2 / 2;
  }
  & > div:nth-of-type(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  & > div:last-of-type {
    grid-area: 3 / 1 / 4 / 2;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export default FormPageWrapper;

FormPageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
