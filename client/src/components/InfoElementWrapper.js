import styled from "@emotion/styled";
import PropTypes from "prop-types";

const InfoElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
  & span:first-of-type {
    color: var(--text-color-attention);
    padding: 0.25rem 0;
  }
  & span:nth-of-type(2) {
    text-align: right;
    padding: 0 0 0.25rem;
  }
  & a {
    color: var(--text-color-normal);
    text-align: right;
    padding: 0.05rem 0;
  }
`;

export default InfoElementWrapper;

InfoElementWrapper.propTypes = {
  children: PropTypes.element,
};
