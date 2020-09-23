import styled from "@emotion/styled";
import PropTypes from "prop-types";

const InfoElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;
`;

export default InfoElementWrapper;

InfoElementWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
