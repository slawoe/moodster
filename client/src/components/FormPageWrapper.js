import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FormPageWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-rows: 25% 65% 10%;
  & > div:first-child {
    grid-area: 1 / 1 / 2 / 2;
  }
  & > div:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  & > div:last-child {
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
