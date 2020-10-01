import styled from "@emotion/styled";
import PropTypes from "prop-types";

const InfoElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  & :first-child {
    width: 50%;
  }
  & :last-child {
    width: 50%;
  }
`;

export default InfoElementWrapper;

InfoElementWrapper.propTypes = {
  children: PropTypes.element,
};
